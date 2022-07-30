import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
  About,
  Connect,
  Footer,
  Landing,
  Nav,
  Projects,
  Skills,
} from "../components";

const Home: NextPage = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      <Head>
        <title>Sanskar Sharma - Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for Frontend Web Developer Sanskar Sharma"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav isClosed={isClosed} setIsClosed={setIsClosed} />
      <div id={isClosed ? "closed-content" : "content"}>
        <main>
          <Landing />
          <About />
          <Skills />
          <Projects />
          <Connect />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
