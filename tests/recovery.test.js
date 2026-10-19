import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/dc-organizer/auth/confirmed.js', import.meta.url), 'utf8');
const bridge = readFileSync(new URL('../public/dc-organizer/auth/bridge.js', import.meta.url), 'utf8');
const reset = readFileSync(new URL('../public/dc-organizer/reset-password/reset.js', import.meta.url), 'utf8');

test('a ponte leva links de recuperação à página de reset sem expor o token em query', () => {
  const destinations = [];
  vm.runInNewContext(bridge, {
    URLSearchParams,
    location: {
      hash: '#access_token=synthetic-token&type=recovery',
      search: '',
      replace(url) { destinations.push(url); },
    },
  });
  assert.equal(destinations[0], 'https://www.datadashapp.com/dc-organizer/reset-password#access_token=synthetic-token&type=recovery');
});

test('a ponte preserva a confirmação de cadastro e rejeita links sem token', () => {
  const destinations = [];
  const context = (hash) => ({
    URLSearchParams,
    location: { hash, search: '', replace(url) { destinations.push(url); } },
  });
  vm.runInNewContext(bridge, context('#access_token=synthetic-token&type=signup'));
  vm.runInNewContext(bridge, context('#type=recovery'));
  assert.equal(destinations[0], 'https://www.datadashapp.com/dc-organizer/auth/confirmed.html#access_token=synthetic-token&type=signup');
  assert.equal(destinations[1], 'https://www.datadashapp.com/dc-organizer/reset-password?error=1');
});

test('a página de reset apaga o fragmento e altera a senha com o token de recuperação', async () => {
  const elements = new Map();
  const listeners = new Map();
  const historyCalls = [];
  const requests = [];
  for (const id of ['title', 'message', 'reset-form', 'password', 'confirmation', 'submit']) {
    elements.set(id, {
      textContent: '', value: '', hidden: id === 'reset-form', disabled: false,
      classList: { add() {}, remove() {} },
      addEventListener(name, handler) { listeners.set(id + ':' + name, handler); },
    });
  }
  vm.runInNewContext(reset, {
    URLSearchParams,
    location: { search: '', pathname: '/dc-organizer/reset-password', hash: '#access_token=synthetic-token&type=recovery' },
    history: { replaceState(...args) { historyCalls.push(args); } },
    document: { getElementById(id) { return elements.get(id); } },
    fetch: async (...args) => { requests.push(args); return { ok: true, json: async () => ({}) }; },
  });
  assert.equal(elements.get('reset-form').hidden, false);
  assert.equal(historyCalls[0][2], '/dc-organizer/reset-password');
  elements.get('password').value = 'senha-nova-123';
  elements.get('confirmation').value = 'senha-nova-123';
  await listeners.get('reset-form:submit')({ preventDefault() {} });
  assert.equal(requests[0][1].headers.authorization, 'Bearer synthetic-token');
  assert.equal(JSON.parse(requests[0][1].body).password, 'senha-nova-123');
  assert.equal(elements.get('reset-form').hidden, true);
  assert.equal(elements.get('password').value, '');
});

test('link de recuperação mostra o formulário, remove o token da URL e envia a nova senha', async () => {
  const elements = new Map();
  const listeners = new Map();
  const historyCalls = [];
  const requests = [];
  for (const id of ['title', 'message', 'reset-form', 'password', 'confirm-password', 'submit']) {
    elements.set(id, {
      textContent: '', value: '', hidden: id === 'reset-form', disabled: false,
      classList: { add() {}, remove() {} },
      addEventListener(name, handler) { listeners.set(id + ':' + name, handler); },
    });
  }
  vm.runInNewContext(source, {
    URLSearchParams,
    location: {
      search: '', pathname: '/dc-organizer/auth/confirmed.html',
      hash: '#access_token=test-token&type=recovery',
    },
    history: { replaceState(...args) { historyCalls.push(args); } },
    document: { getElementById(id) { return elements.get(id); } },
    fetch: async (...args) => { requests.push(args); return { ok: true, json: async () => ({}) }; },
  });
  assert.equal(elements.get('reset-form').hidden, false);
  assert.equal(historyCalls[0][2], '/dc-organizer/auth/confirmed.html');
  elements.get('password').value = 'senha-nova-123';
  elements.get('confirm-password').value = 'senha-nova-123';
  await listeners.get('reset-form:submit')({ preventDefault() {} });
  assert.equal(requests[0][1].headers.authorization, 'Bearer test-token');
  assert.equal(JSON.parse(requests[0][1].body).password, 'senha-nova-123');
  assert.equal(elements.get('reset-form').hidden, true);
});
