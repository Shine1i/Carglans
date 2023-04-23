import { requestHandler } from 'sveltekit-image/api'

export const GET = requestHandler({
  leadingUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://preeminent-banoffee-60b370.netlify.app'
      : 'http://127.0.0.1:5173',
			ttl: 1000 * 60 * 60 * 24 * 7,
			storePath: '.svelte-kit/images',
})