(() => {
  const SUPABASE_URL = 'https://wsbqqinzzpcimszdxgtf.supabase.co';
  const API_KEY = 'sb_publishable_y8oygRGWF9WMOEB6Sluqog_TIO0prAX';
  const fragment = new URLSearchParams(location.hash.slice(1));
  const query = new URLSearchParams(location.search);
  let accessToken = fragment.get('access_token');
  const recovery = fragment.get('type') === 'recovery' || query.get('type') === 'recovery';

  // Keep the bearer token only in this page's memory.
  history.replaceState(null, '', location.pathname);

  const title = document.getElementById('title');
  const message = document.getElementById('message');
  const form = document.getElementById('reset-form');
  const password = document.getElementById('password');
  const confirmation = document.getElementById('confirmation');
  const submit = document.getElementById('submit');

  if (query.has('error') || fragment.has('error') || !recovery || !accessToken) {
    title.textContent = 'Link inválido';
    message.textContent = 'O link expirou ou já foi usado. Solicite outro na extensão.';
    message.classList.add('error');
    accessToken = null;
  } else {
    message.textContent = 'Escolha uma nova senha para sua conta.';
    form.hidden = false;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.classList.remove('error');
    if (!accessToken) return;
    if (password.value.length < 8) {
      message.textContent = 'Use pelo menos 8 caracteres.';
      message.classList.add('error');
      return;
    }
    if (password.value !== confirmation.value) {
      message.textContent = 'As senhas não coincidem.';
      message.classList.add('error');
      return;
    }

    submit.disabled = true;
    try {
      const response = await fetch(SUPABASE_URL + '/auth/v1/user', {
        method: 'PUT',
        headers: {
          apikey: API_KEY,
          authorization: 'Bearer ' + accessToken,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ password: password.value })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(response.status === 401
          ? 'Link expirado. Solicite outro na extensão.'
          : data.msg || data.message || data.error_description || data.error || 'Não foi possível salvar a senha.');
      }
      accessToken = null;
      form.hidden = true;
      title.textContent = 'Senha atualizada';
      message.textContent = 'Volte à extensão e entre com a nova senha.';
    } catch (error) {
      message.textContent = error.message;
      message.classList.add('error');
    } finally {
      submit.disabled = false;
      password.value = '';
      confirmation.value = '';
    }
  });
})();
