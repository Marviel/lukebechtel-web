/* eslint-disable react/display-name */
import React from 'react'

import {
  ComponentMap,
  MDXLayout,
} from 'pliny/mdx-components'
import { BlogNewsletterForm } from 'pliny/ui/NewsletterForm'
import { Pre } from 'pliny/ui/Pre'
import { TOCInline } from 'pliny/ui/TOCInline'

import Image from './Image'
import CustomLink from './Link'
import MDXWrapper from './MDXWrapper'
import GPT4Message from './messages/GPT4Message'
import LukeMessage from './messages/LukeMessage'
import Thread from './messages/Thread'

export const Wrapper = ({ layout, content, ...rest }: MDXLayout) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}

export const MDXComponents: ComponentMap = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
  GPT4Message,
  LukeMessage,
  Thread,
  MDXWrapper,
}
