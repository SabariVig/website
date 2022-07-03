import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import mdSvexconfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdSvexconfig)],
  extensions: ['.svelte', ...mdSvexconfig.extensions],
  prerender: {
    default: true
  },

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    vite: {
      server: {
        fs: {
          allow: [
            // your custom rules
            'posts'
          ]
        }
      }
    },
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
}

export default config
