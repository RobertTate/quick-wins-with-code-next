import type { Entry } from 'contentful'
import type { TypeArticleSkeleton } from '@/types/contentful';
import type { Options } from '@contentful/rich-text-react-renderer';

import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Link from 'next/link';
import Image from 'next/image';

import Slice from "@/components/slice";
import Block from "@/components/block";
import Container from "@/components/container";
import Text from "@/components/text";
import Button from "@/components/button";

type TeaserProps = {
  article: Entry<TypeArticleSkeleton, undefined, string>;
  styleIndex: number;
}

type ArticleImage = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    }
  }
}

const options: Options = {
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: ({
      data: {
        target: { slug, title },
      },
    }) => <Link href={slug}>{title}</Link>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <Image
          src={node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '18px',
          }}
        />
      )
    }
  },
}

export default function Teaser({ article, styleIndex }: TeaserProps) {
  const articleImage = article.fields.articleImage as ArticleImage;
  const articleImageDescription = articleImage.fields.description;
  const articleImageUrl = articleImage.fields.file.url;
  const articleTitle = article.fields.title;
  const articleTeaser = article.fields.teaser;
  const articleUrl = article.fields.url;

  return (
    renderTeaser(styleIndex)
  )

  function renderTeaser(styleIndex: number) {
    switch (styleIndex) {
      case 0:
        return (
          <Slice key={styleIndex} utilities="u-bg3 u-c2">
            <Block modifier="Block--withSpace">
              <Container modifier="Container--articleImage">
                <Image
                  alt={articleImageDescription}
                  src={`https:${articleImageUrl}`}
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                  }}
                />
              </Container>
              <Container>
                <Text semantic="h2" modifier="Text--xl" utilities="u-spacing-2">{articleTitle}</Text>
                <Text semantic="div" modifier="Text--small Text--italics">{articleTeaser && documentToReactComponents(articleTeaser, options)}</Text>
                <Button modifier="Button--dark" href={articleUrl} target="_blank">Click Here to Read On</Button>
              </Container>
            </Block>
          </Slice>
        )
      case 1:
        return (
          <Slice key={styleIndex} utilities="u-bg2 u-c1">
            <Block modifier="Block--withSpace">
              <Container>
                <Text semantic="h2" modifier="Text--xl" utilities="u-spacing-2">{articleTitle}</Text>
                <Text semantic="div" modifier="Text--small Text--italics">{articleTeaser && documentToReactComponents(articleTeaser, options)}</Text>
                <Button href={articleUrl} target="_blank">Click Here to Read On</Button>
              </Container>
              <Container modifier="Container--articleImage">
                <Image
                  alt={articleImageDescription}
                  src={`https:${articleImageUrl}`}
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                  }}
                />
              </Container>
            </Block>
          </Slice>
        )
      case 2:
        return (
          <Slice key={styleIndex} utilities="u-bg1 u-c1">
            <Block modifier="Block--withSpace">
              <Container modifier="Container--articleImage">
                <Image
                  alt={articleImageDescription}
                  src={`https:${articleImageUrl}`}
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                  }}
                />
              </Container>
              <Container>
                <Text semantic="h2" modifier="Text--xl" utilities="u-spacing-2">{articleTitle}</Text>
                <Text semantic="div" modifier="Text--small Text--italics">{articleTeaser && documentToReactComponents(articleTeaser, options)}</Text>
                <Button href={articleUrl} target="_blank">Click Here to Read On</Button>
              </Container>
            </Block>
          </Slice>
        )
      case 3:
        return (
          <Slice key={styleIndex} utilities="u-bg3 u-c2">
            <Block modifier="Block--withSpace">
              <Container>
                <Text semantic="h2" modifier="Text--xl" utilities="u-spacing-2">{articleTitle}</Text>
                <Text semantic="div" modifier="Text--small Text--italics">{articleTeaser && documentToReactComponents(articleTeaser, options)}</Text>
                <Button modifier="Button--dark" href={articleUrl} target="_blank">Click Here to Read On</Button>
              </Container>
              <Container modifier="Container--articleImage">
                <Image
                  alt={articleImageDescription}
                  src={`https:${articleImageUrl}`}
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                  }}
                />
              </Container>
            </Block>
          </Slice>
        )
      case 4:
        return (
          <Slice key={styleIndex} utilities="u-bg2 u-c1">
            <Block modifier="Block--withSpace">
              <Container modifier="Container--articleImage">
                <Image
                  alt={articleImageDescription}
                  src={`https:${articleImageUrl}`}
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                  }}
                />
              </Container>
              <Container>
                <Text semantic="h2" modifier="Text--xl" utilities="u-spacing-2">{articleTitle}</Text>
                <Text semantic="div" modifier="Text--small Text--italics">{articleTeaser && documentToReactComponents(articleTeaser, options)}</Text>
                <Button href={articleUrl} target="_blank">Click Here to Read On</Button>
              </Container>
            </Block>
          </Slice>
        )
      case 5:
        return (
          <Slice key={styleIndex} utilities="u-bg1 u-c1">
            <Block modifier="Block--withSpace">
              <Container>
                <Text semantic="h2" modifier="Text--xl" utilities="u-spacing-2">{articleTitle}</Text>
                <Text semantic="div" modifier="Text--small Text--italics">{articleTeaser && documentToReactComponents(articleTeaser, options)}</Text>
                <Button href={articleUrl} target="_blank">Click Here to Read On</Button>
              </Container>
              <Container modifier="Container--articleImage">
                <Image
                  alt={articleImageDescription}
                  src={`https:${articleImageUrl}`}
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                  }}
                />
              </Container>
            </Block>
          </Slice>
        )
      default:
        return <h2>No articles Found</h2>
    }
  }
}
