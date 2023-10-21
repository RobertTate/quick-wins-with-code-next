import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Slice from "@/components/slice";
import Container from "@/components/container";
import Text from "@/components/text";

import githubIcon from '../../public/images/github-icon.svg';
import devIcon from '../../public/images/dev.svg';
import linkedInIcon from '../../public/images/linkedin.svg';

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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBlockEnd: '1rem'
          }}>
            <Link target='_blank' href="https://dev.to/roberttate">
              <Image
                alt="Dev.to Icon"
                src={devIcon}
                sizes="100vw"
                priority
                style={{
                  width: '70px',
                  height: 'fit-content'
                }}
              />
            </Link>
            <Link target='_blank' href="https://github.com/RobertTate">
              <Image
                alt="Github Icon"
                src={githubIcon}
                sizes="100vw"
                priority
                style={{
                  width: '70px',
                  height: 'fit-content',
                  marginLeft: '1rem',
                  marginRight: '1rem'
                }}
              />
            </Link>
            <Link target='_blank' href="https://www.linkedin.com/in/robertjtate/">
              <Image
                alt="LinkedIn Icon"
                src={linkedInIcon}
                sizes="100vw"
                priority
                style={{
                  width: '70px',
                  height: 'fit-content'
                }}
              />
            </Link>
          </div>
          <Text modifier="Text--large">Send me a message at:</Text>
          <Text modifier="Text--medium">robertjosephtate@gmail.com</Text>
        </Container>
      </Slice>
    </>
  )
}
