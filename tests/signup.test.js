import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { signUp, validateAccess, validateDetails, validateProfile, validateSignup } from '../src/dc-organizer/signup/signupApi.js';

const base = {
  accountType: 'provider', clientCount: '6 a 20', companySize: '', industry: 'Marketing',
  companyName: 'Agência Exemplo', name: 'Ana Souza', phone: '(11) 99999-9999',
  email: 'ana@example.com', password: 'senha-segura-123', confirmation: 'senha-segura-123',
};

const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; });

test('a primeira etapa exige o perfil e a classificação correspondente', () => {
  assert.match(validateProfile({ ...base, clientCount: '' }), /clientes/);
  assert.match(validateProfile({ ...base, accountType: 'user', companySize: '' }), /tamanho/);
  assert.equal(validateProfile({ ...base, accountType: 'user', companySize: '16 a 19 pessoas' }), '');
  assert.match(validateProfile({ ...base, industry: ' ' }), /nicho/);
  assert.match(validateProfile({ ...base, industry: 'a'.repeat(101) }), /100 caracteres/);
});

test('a segunda etapa valida apenas os dados gerais', () => {
  assert.match(validateDetails({ ...base, name: '' }), /nome/);
  assert.match(validateDetails({ ...base, phone: '123' }), /telefone/);
  assert.match(validateDetails({ ...base, phone: '1'.repeat(16) }), /telefone/);
  assert.match(validateDetails({ ...base, companyName: 'a'.repeat(121) }), /120 caracteres/);
  assert.match(validateDetails({ ...base, name: 'a'.repeat(121) }), /120 caracteres/);
  assert.equal(validateDetails({ ...base, email: '', password: '' }), '');
});

test('a terceira etapa valida o acesso e o envio final valida todas as etapas', () => {
  assert.match(validateAccess({ ...base, email: 'inválido' }), /e-mail/);
  assert.match(validateAccess({ ...base, confirmation: 'diferente' }), /coincidem/);
  assert.equal(validateAccess({ ...base, name: '' }), '');
  assert.match(validateSignup({ ...base, name: '' }), /nome/);
  assert.equal(validateSignup(base), '');
});

test('o cadastro envia os dados de perfil ao Supabase Auth sem a confirmação de senha', async () => {
  let request;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ id: 'user-id', email: 'ana@example.com' }) };
  };
  await signUp(base);
  assert.equal(request.url, 'https://wsbqqinzzpcimszdxgtf.supabase.co/auth/v1/signup');
  const payload = JSON.parse(request.options.body);
  assert.equal(payload.data.account_type, 'provider');
  assert.equal(payload.data.client_count, '6 a 20');
  assert.equal(payload.data.company_size, null);
  assert.equal(payload.data.industry, 'Marketing');
  assert.equal(payload.data.company_name, 'Agência Exemplo');
  assert.equal(payload.data.contact_phone, '(11) 99999-9999');
  assert.equal(payload.confirmation, undefined);
});

test('falha de rede não é interpretada como cadastro concluído', async () => {
  globalThis.fetch = async () => ({ ok: false, json: async () => ({ message: 'rate limit exceeded' }) });
  await assert.rejects(signUp(base), /Muitas tentativas/);
});

test('resposta sem usuário não é interpretada como cadastro concluído', async () => {
  globalThis.fetch = async () => ({ ok: true, json: async () => ({}) });
  await assert.rejects(signUp(base), /Não foi possível confirmar/);
});
