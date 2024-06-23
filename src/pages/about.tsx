import { Fragment } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Slice from "@/components/slice";
import Block from "@/components/block";
import Container from "@/components/container";
import Text from "@/components/text";
import Button from "@/components/button";

import bobbyAda from '../../public/images/bobby-ada.jpg';
import bobbyMaine from '../../public/images/bobby-maine.jpg';
import githubIcon from '../../public/images/github-icon.png';
import dashboardMakerDiceDemo from "../../public/images/DashboardMakerDicePreview.gif";
import reactHooksTutorial from '../../public/images/react-hooks-tutorial.png';
import dmcli from '../../public/images/dmcli.jpg';

export default function About() {
  const experienceList = [
    "JavaScript",
    "Python",
    "TypeScript",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "GraphQL",
    "Redux",
    "Redux-Saga",
    "HTML",
    "CSS",
    "Sass",
    "BEM",
    "React Native",
    "Lit",
    "Astro",
    "Gatsby",
    "Django",
    "Ruby on Rails",
    "Jest",
    "Pytest",
    "CodeceptJS",
    "Docker",
    "Firebase",
    "Vercel",
    "Netlify",
    "Webpack",
    "Babel",
    "Optimizely",
    "Redis",
    "MongoDB",
    "Github Actions",
    "AWS Services (Lambda, API Gateway, Kinesis, SQS, SNS, DynamoDB, S3, Evidently)",
  ]

  const experienceOutput = experienceList.map((item, index) => {
    if (index === experienceList.length - 1) {
      return (
        <Fragment key={index}>
          <span> {item}</span>
        </Fragment>
      )
    } else {
      return (
        <Fragment key={index}>
          <span> {item}</span><span> /</span>
        </Fragment>
      )
    }
  })

  return (
    <Fragment>
      <Head>
        <title>About | Quick Wins With Code</title>
        <meta property="og:title" content="About"></meta>
      </Head>
      <Slice modifier="Slice--hero" utilities="u-bg3 u-c2">
        <Block>
          <Container modifier="Container--alignCenter">
            <Text semantic="h1" modifier="Text--xl" utilities="u-spacing-1">About Me</Text>
            <Text modifier="Text--medium">(Robert Tate)</Text>
          </Container>
          <Container modifier="Container--alignCenter">
          <Image
            alt="Bobby and Ada"
            priority
            src={bobbyAda}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '18px',
            }}
          />
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg2 u-c1">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignLeft">
          <Image
              alt="Github Profile Picture"
              src={bobbyMaine}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '18px',
              }}
            />
          </Container>
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--medium">I&apos;m a Software Developer living and working in Nashville, TN.</Text>
            <div style={{display: "flex", alignItems: "center", minWidth: "15rem"}}>
            <Image
              alt="Github Icon"
              src={githubIcon}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'fit-content',
                marginRight: "1.5rem"
              }}
            />
            <Button href={`https://github.com/RobertTate`} target="_blank">See My Github Profile</Button>
            </div>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg3 u-c2">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--small" styles={{maxWidth: "40rem"}}>I made <strong>Quick Wins With Code</strong> because I wanted to create a place where I could quickly share things I&apos;ve learned about coding with others. I love when a programming concept &quot;clicks&quot;, so I&apos;m trying to pass that feeling on. <span role="img" aria-label="Smile Emoji">&#128522;</span></Text>
            <Link className='u-special-link--dark' href={`/`}>Get back to the articles. Shame me for not writing more often.</Link>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg1 u-c1">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">I have experience with:</Text>
            <Text semantic="div" modifier="Text--small" utilities="u-spacing-2" styles={{maxWidth: "40rem"}}> {experienceOutput}
            </Text>
            <Button href={`/images/Robert-Tate-Developer-Resume-2023.pdf`} target="_blank">Check Out My Resume</Button>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg3 u-c2">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">Projects</Text>
            <Text modifier="Text--xs">( Just a few right now. I spend most of my time developing stuff for Asurion. )</Text>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg1 u-c1">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
          <Image
              alt="Image from Dashboard Maker App"
              src={dashboardMakerDiceDemo}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '18px',
              }}
            />
          </Container>
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">Dashboard Maker</Text>
            <Text modifier="Text--small">A D&D themed notetaking app for <a className='u-special-link' target="_blank" href="https://www.owlbear.rodeo/">Owlbeard Rodeo</a></Text>
            <Button style={{marginBottom: "1rem"}} href="https://github.com/RobertTate/dashboard-maker" target="_blank">See The Code</Button>
            <Button href="https://owlbear-dashboard-maker.vercel.app" target="_blank">Play With The App</Button>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg3 u-c2">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">React Hooks Tutorial</Text>
            <Text modifier="Text--small">A site to help teach <a className='u-special-link--dark' target="_blank" href="https://react.dev">React</a> Hooks.</Text>
            <Button style={{marginBottom: "1rem"}} modifier="Button--dark" href="https://github.com/RobertTate/react-hooks-demonstration" target="_blank">See The Code</Button>
            <Button modifier="Button--dark" href="https://react-hooks-demonstration.vercel.app" target="_blank">See The App</Button>
          </Container>
          <Container modifier="Container--alignCenter">
            <Image
              alt="Image from my react hooks tutorial site"
              src={reactHooksTutorial}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '18px',
              }}
            />
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg2 u-c1">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Image
              alt="Image from DMCLI Start Menu"
              src={dmcli}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '18px',
              }}
            />
          </Container>
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">DCMLI</Text>
            <Text modifier="Text--small">A command line tool for dungeon masters.</Text>
            <Button href="https://www.npmjs.com/package/@robert-tate/dmcli" target="_blank">Check it out on npm</Button>
          </Container>
        </Block>
      </Slice>
    </Fragment>
  )
}
