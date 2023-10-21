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
import githubIcon from '../../public/images/github-icon.svg';
import dmcli from '../../public/images/dmcli.jpg';
import djangoApp from '../../public/images/django-app.png';
import blogProject from '../../public/images/blog-project.png';
import oldWebsite from '../../public/images/old-website.png';

export default function About() {
  const experienceList = [
    "HTML",
    "CSS",
    "Sass",
    "BEM",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Redux",
    "Redux-Saga",
    "Jest",
    "Gatsby",
    "Next.js",
    "Astro",
    "Node.JS",
    "Express",
    "Firebase",
    "GraphQL",
    "Apollo",
    "Webpack",
    "Babel",
    "Python",
    "Django",
    "Pytest",
    "Ruby on Rails",
    "Freemarker",
    "Docker",
    "Optimizely",
    "AWS Lambda",
    "AWS Kinesis",
    "AWS API Gateway",
    "Redis",
    "MySQL",
    "Heroku",
    "Netlify",
    "GoCD",
    "Amazon Cloudfront",
    "Magnolia CMS",
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
            <Link href={`/`}>Get back to the articles. Shame me for not writing more often.</Link>
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
            <Text modifier="Text--small">A Command Line Tool for Dungeon Masters.</Text>
            <Button href="https://www.npmjs.com/package/@robert-tate/dmcli" target="_blank">Check it out on npm</Button>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg1 u-c1">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">Django Task Manager</Text>
            <Text modifier="Text--small">An app using Django as a REST API with a Sqlite Database, using React with Bootstrap and Reactstrap as the client, and using docker-compose to spin up multiple containers for local development.</Text>
            <Button href="https://github.com/RobertTate/django-task-manager" target="_blank">Download it from Github</Button>
          </Container>
          <Container modifier="Container--alignCenter">
          <Image
              alt="Image from Django Task Manager App"
              src={djangoApp}
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

      <Slice utilities="u-bg3 u-c2">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Image
              alt="Image from my Blog Project App"
              src={blogProject}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '18px',
              }}
            />
          </Container>
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">Blog App</Text>
            <Text modifier="Text--small">A Node.js application using React, Express, MySQL, Passport, Bcrypt, Stripe, Mailgun, and Bootstrap.</Text>
            <Button modifier="Button--dark" href="https://guarded-garden-27785.herokuapp.com/" target="_blank">Check out the site</Button>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg2 u-c1">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">A Walk Down Memory Lane</Text>
            <Text modifier="Text--small">My first personal website - when I was fresh out of a code school in the summer of 2018.</Text>
            <Button href="https://protected-springs-72451.herokuapp.com" target="_blank">Check out the site</Button>
          </Container>
          <Container modifier="Container--alignCenter">
            <Image
              alt="Image from my first portfolio website"
              src={oldWebsite}
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
    </Fragment>
  )
}
