(() => {
  const fragment = new URLSearchParams(location.hash.slice(1));
  const query = new URLSearchParams(location.search);
  const type = fragment.get('type') || query.get('type');
  const recovery = type === 'recovery';
  const destination = recovery
    ? 'https://www.datadashapp.com/dc-organizer/reset-password'
    : 'https://www.datadashapp.com/dc-organizer/auth/confirmed.html';
  const failed = query.has('error') || query.has('error_code') || fragment.has('error') || fragment.has('error_code');
  const valid = fragment.has('access_token') && (recovery || type === 'signup');

  // Navigate in the browser so the fragment never reaches an HTTP server.
  location.replace(destination + (failed || !valid ? '?error=1' : location.hash));
})();
