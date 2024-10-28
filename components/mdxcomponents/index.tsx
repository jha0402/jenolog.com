import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from '../newletter/BlogNewsLetterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import WebsiteEmbed from './WebsiteEmbed'
import CloudinaryImg from '../images/CloudinaryImg'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  WebsiteEmbed,
  CloudinaryImg,
}
