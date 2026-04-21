export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Ruta Mágica: Si la URL pide /api/* se va al Backend en Swift. Si no, al Frontend en React.
    let targetHost = 'rawrnot-app-662148571449.us-east1.run.app';
    if (url.pathname.startsWith('/api')) {
        targetHost = 'core-backend-662148571449.us-east1.run.app';
    }

    url.hostname = targetHost;

    const proxyRequest = new Request(url.toString(), request);
    proxyRequest.headers.set('Host', targetHost);
    proxyRequest.headers.set('X-Forwarded-Host', 'rawrnot.com');

    return fetch(proxyRequest);
  }
};
