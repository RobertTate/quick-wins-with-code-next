import { Fragment } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Slice from "@/components/slice";
import Block from "@/components/block";
import Container from "@/components/container";
import Text from "@/components/text";
import Button from "@/components/button";
import DownArrow from '@/components/downArrow';

import dashboardMakerDiceDemo from "../../public/images/DashboardMakerDicePreview.gif";
import reactHooksTutorial from '../../public/images/react-hooks-tutorial.png';
import dmcli from '../../public/images/dmcli.jpg';

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>Projects | Quick Wins With Code</title>
        <meta property="og:title" content="About"></meta>
      </Head>
      <Slice modifier="Slice--hero" utilities="u-bg3 u-c2">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text semantic="h1" modifier="Text--xl" utilities="u-spacing-1">Projects</Text>
            <Text modifier="Text--medium">A smattering of home grown passion projects.</Text>
            <DownArrow />
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
            <Text modifier="Text--small">A D&D themed notetaking app for <a className='u-special-link' target="_blank" href="https://www.owlbear.rodeo/">Owlbear Rodeo</a></Text>
            <Button style={{ marginBottom: "1rem" }} href="https://github.com/RobertTate/dashboard-maker" target="_blank">See The Code</Button>
            <Button href="https://owlbear-dashboard-maker.vercel.app" target="_blank">Play With The App</Button>
          </Container>
        </Block>
      </Slice>

      <Slice utilities="u-bg3 u-c2">
        <Block modifier="Block--withSpace">
          <Container modifier="Container--alignCenter">
            <Text modifier="Text--xl">React Hooks Tutorial</Text>
            <Text modifier="Text--small">A site to help teach <a className='u-special-link--dark' target="_blank" href="https://react.dev">React</a> Hooks.</Text>
            <Button style={{ marginBottom: "1rem" }} modifier="Button--dark" href="https://github.com/RobertTate/react-hooks-demonstration" target="_blank">See The Code</Button>
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
