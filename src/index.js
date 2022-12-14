addEventListener('fetch', (event) => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(
    JSON.stringify({
      message: 'hello from cloudflare-worker-starter-kit',
    }),
  )
}
