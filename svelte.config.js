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


  kit: {
    prerender: {
      default: true
    },
    vite: {
      server: {
        fs: {
          allow: [
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
