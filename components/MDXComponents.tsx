/* eslint-disable react/display-name */
import React from 'react'

import { ComponentMap, MDXLayout } from 'pliny/mdx-components'
import { BlogNewsletterForm, NewsletterForm } from 'pliny/ui/NewsletterForm'
import { Pre } from 'pliny/ui/Pre'
import { TOCInline } from 'pliny/ui/TOCInline'

import { AGQSectionHeader } from './agq/AGQSectionHeader'
import LifeSpendCalculator from './calculators/LifeSpendCalculator'
import CustomAside from './CustomAside'
import Image from './Image'
import { ImageWithCaption } from './ImageWithCaption'
import CustomLink from './Link'
import MDXWrapper from './MDXWrapper'
import GPT4Message from './messages/GPT4Message'
import LukeMessage from './messages/LukeMessage'
import Message from './messages/Message'
import Thread from './messages/Thread'

export const Wrapper = ({ layout, content, ...rest }: MDXLayout) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}

export const MDXComponents: ComponentMap = {
  Image,
  TOCInline,
  a: CustomLink,
  aside: CustomAside,
  CustomAside,
  AGQSectionHeader,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
  GPT4Message,
  LukeMessage,
  Message,
  Thread,
  MDXWrapper,
  ImageWithCaption,
  NewsletterForm,
  LifeSpendCalculator,
}
