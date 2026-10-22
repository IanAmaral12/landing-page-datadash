import assert from 'node:assert/strict';
import test from 'node:test';

import { DIAGNOSIS_URL, goalOf, waMessage, waUrl } from '../src/whatsapp.js';

test('waUrl targets the commercial number and encodes the message', () => {
  const url = new URL(waUrl('Olá & até já?'));
  assert.equal(url.origin + url.pathname, 'https://wa.me/5511936248373');
  assert.equal(url.searchParams.get('text'), 'Olá & até já?');
});

test('waMessage builds the greeting with and without a goal', () => {
  assert.equal(waMessage(), 'Olá, Datinha! Vim pelo site da DataDash.');
  assert.equal(
    waMessage(goalOf('dados')),
    'Olá, Datinha! Vim pelo site da DataDash e quero acompanhar os números da empresa em dashboards.',
  );
  assert.match(new URL(DIAGNOSIS_URL).searchParams.get('text'), /agendar um diagnóstico com o Ian\.$/);
});
