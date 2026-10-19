(() => {
  const API_KEY = 'sb_publishable_y8oygRGWF9WMOEB6Sluqog_TIO0prAX';
  const query = new URLSearchParams(location.search);
  const fragment = new URLSearchParams(location.hash.slice(1));
  let accessToken = fragment.get('access_token');
  const recovery = fragment.get('type') === 'recovery';
  history.replaceState(null, '', location.pathname);
  const title = document.getElementById('title');
  const message = document.getElementById('message');
  const form = document.getElementById('reset-form');
  const password = document.getElementById('password');
  const confirmation = document.getElementById('confirm-password');
  const submit = document.getElementById('submit');
  if (query.has('error') || query.has('error_code')) {
    title.textContent = 'Link inválido';
    message.textContent = 'O link expirou ou não pôde ser confirmado. Solicite um novo na extensão.';
    message.classList.add('error');
    accessToken = null;
  } else if (recovery && accessToken) {
    title.textContent = 'Definir nova senha';
    message.textContent = 'Escolha uma nova senha para sua conta.';
    form.hidden = false;
  } else {
    title.textContent = 'E-mail confirmado';
    message.textContent = 'Volte à extensão e entre com seu e-mail e senha.';
    accessToken = null;
  }
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.classList.remove('error');
    if (password.value !== confirmation.value) {
      message.textContent = 'As senhas não coincidem.';
      message.classList.add('error');
      return;
    }
    submit.disabled = true;
    try {
      const response = await fetch('https://wsbqqinzzpcimszdxgtf.supabase.co/auth/v1/user', {
        method: 'PUT',
        headers: { apikey: API_KEY, authorization: 'Bearer ' + accessToken, 'content-type': 'application/json' },
        body: JSON.stringify({ password: password.value })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.msg || data.message || data.error_description || data.error || 'Não foi possível atualizar a senha.');
      accessToken = null;
      form.hidden = true;
      title.textContent = 'Senha atualizada';
      message.textContent = 'Volte à extensão e entre com sua nova senha.';
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