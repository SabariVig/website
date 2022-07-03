import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import wikiLinkPlugin from 'remark-wiki-link'

import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import preview, { textFormatter, htmlFormatter } from 'remark-preview'

const mdSvexconfig = {
  extensions: ['.svelte.md', '.md', '.svx'],
  layout: { blog: './src/Layout/Blog.svelte' },

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [
    remarkParse,
    remarkStringify,
    remarkFrontmatter,
    remarkGfm,
    [wikiLinkPlugin, { hrefTemplate: (permalink) => `${permalink}` }],
    preview(textFormatter({ length: 300, maxBlocks: 3 })),
    preview(
      htmlFormatter({
        length: 300,
        maxBlocks: 1
      }),
      {
        attribute: 'previewHtml'
      }
    )
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrism,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['anchor']
        }
      }
    ]
  ]
}

export default mdSvexconfig
