import { ContentType } from '@/types/frontmatter'
import { readFileSync } from 'fs'
import { bundleMDX } from 'mdx-bundler'
import { join } from 'path'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export async function getFileBySlug(type: ContentType, slug: string) {
  const source = slug
    ? readFileSync(join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`), 'utf8')
    : readFileSync(join(process.cwd(), 'src', 'contents', `${type}.mdx`), 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        () =>
          rehypePrettyCode({
            theme: 'github-dark-dimmed',
          }),
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor'],
            },
          },
        ],
      ]

      return options
    },
  })

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  }
}
