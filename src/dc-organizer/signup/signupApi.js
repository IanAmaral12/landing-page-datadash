const SUPABASE_URL = 'https://wsbqqinzzpcimszdxgtf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_y8oygRGWF9WMOEB6Sluqog_TIO0prAX';

export const MIN_PASSWORD_LENGTH = 8;
export const CLIENT_COUNTS = ['1 a 5', '6 a 20', '21 a 50', '51 ou mais'];
export const COMPANY_SIZES = ['1 pessoa', '2 a 5 pessoas', '6 a 15 pessoas', '16 a 19 pessoas', '20 pessoas ou mais'];

export function validateProfile(form) {
  if (!['provider', 'user'].includes(form.accountType)) return 'Selecione como você usa o DataCrazy.';
  if (form.accountType === 'provider' && !CLIENT_COUNTS.includes(form.clientCount)) return 'Selecione a quantidade de clientes.';
  if (form.accountType === 'user' && !COMPANY_SIZES.includes(form.companySize)) return 'Selecione o tamanho da empresa.';
  if (!form.industry.trim()) return 'Informe o nicho de atuação.';
  return '';
}

export function validateSignup(form) {
  const profileError = validateProfile(form);
  if (profileError) return profileError;
  if (!form.name.trim()) return 'Informe seu nome.';
  if (form.phone.replace(/\D/g, '').length < 10) return 'Informe um telefone com DDD.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Informe um e-mail válido.';
  if (form.password.length < MIN_PASSWORD_LENGTH) return `A senha precisa ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`;
  if (form.password !== form.confirmation) return 'As senhas não coincidem.';
  return '';
}

export async function signUp(form) {
  const problem = validateSignup(form);
  if (problem) throw new Error(problem);
  const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: 'POST',
    headers: { apikey: SUPABASE_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({
      email: form.email.trim(),
      password: form.password,
      data: {
        account_type: form.accountType,
        client_count: form.accountType === 'provider' ? form.clientCount : null,
        company_size: form.accountType === 'user' ? form.companySize : null,
        industry: form.industry.trim(),
        company_name: form.companyName.trim() || null,
        full_name: form.name.trim(),
        contact_phone: form.phone.trim(),
      },
    }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(translateError(data.msg || data.message || data.error_description || data.error));
  if (!data.user?.id) throw new Error('Não foi possível confirmar o cadastro. Tente novamente.');
  return data;
}

function translateError(message = '') {
  if (/already registered|already exists/i.test(message)) return 'Já existe uma conta com este e-mail. Entre pela extensão.';
  if (/rate limit|too many/i.test(message)) return 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
  if (/password/i.test(message)) return 'Senha fraca. Use uma senha mais longa, misturando letras e números.';
  return message || 'Não foi possível criar a conta. Tente novamente.';
}
