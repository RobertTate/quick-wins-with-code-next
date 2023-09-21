import Head from 'next/head';

import Slice from "@/components/slice";
import Container from "@/components/container";
import Text from "@/components/text";

const customStyles = {
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Quick Wins With Code</title>
        <meta property="og:title" content="Contact"></meta>
      </Head>
      <Slice modifier="Slice--solo" utilities="u-bg2 u-c1" styles={customStyles}>
        <Container modifier="Container--alignCenter">
          <Text modifier="Text--large">Send me a message at:</Text>
          <Text modifier="Text--medium">robertjosephtate@gmail.com</Text>
        </Container>
      </Slice>
    </>
  )
}
