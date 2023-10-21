import type { EntryCollection } from 'contentful';
import type { TypeArticleSkeleton } from '@/types/contentful';

import Head from 'next/head';
import { createClient } from 'contentful';

import Slice from "@/components/slice";
import Block from "@/components/block";
import Container from "@/components/container";
import Text from "@/components/text";
import Trophy from "@/components/trophy";
import Teaser from '@/components/teaser';

type HomePageProps = {
  collection: EntryCollection<TypeArticleSkeleton, undefined, string>
}

export default function Home({ collection }: HomePageProps) {
  const articles = collection.items;
  return (
    <>
      <Head>
        <title>Home | Quick Wins With Code</title>
        <meta property="og:title" content="Home"></meta>
      </Head>
      <Slice modifier="Slice--hero" utilities="u-c2">
        <Block>
          <Container modifier="Container--alignCenter">
            <Text semantic="h1" styles={{ maxWidth: "22rem", marginBottom: "0" }} modifier="Text--xl" utilities="a-fade1 u-spacing-2">Quick Wins With Code</Text>
            <Trophy />
            <Text modifier="Text--small Text--heroLede" utilities="a-fade2">Short articles unpacking powerful programming concepts.</Text>
          </Container>
        </Block>
      </Slice>
      {articles.map((article, index) => {
        const styleIndex = index % 6;
        return (
          <Teaser key={`${index}-${styleIndex}`} article={article} styleIndex={styleIndex} />
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const collection = await client.getEntries({
    content_type: 'article',
  });

  return {
    props: {
      collection,
    },
  };
}
