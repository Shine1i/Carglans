import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
      static: true,
			fallback: null,
			precompress: true,
    }),
	},
	vitePlugin: {
		experimental: {
			inspector: {
				// change shortcut
				toggleKeyCombo: 'x',
				// hold and release key to toggle inspector mode
				holdMode: true,
				// show or hide the inspector option
				// inspector position
				toggleButtonPos: 'top-right'
			}
		}
	}
};

export default config;
