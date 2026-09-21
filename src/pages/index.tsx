import Hero from "@/widgets/hero";
import Metrics from "@/widgets/metrics";
import WhatRemains from "@/widgets/what-remains";
import PlayunmuteShowcase from "@/widgets/playunmute";
import Projects from "@/widgets/projects";
import SocialProof from "@/widgets/social-proof";
import Mentorship from "@/widgets/mentorship";
import Skills from "@/widgets/skills";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import Head from "next/head";
import {
  SITE_URL,
  SITE_NAME,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  OG_IMAGE,
  AUTHOR_NAME,
  AUTHOR_JOB_TITLE,
} from "@/shared/config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="profile" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta
          property="og:image:alt"
          content={`${AUTHOR_NAME} · ${AUTHOR_JOB_TITLE}`}
        />
        <meta property="og:locale" content="ru_RU" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <a href="#main-content" className="skip-link">
        Перейти к содержимому
      </a>

      <Header />

      <main id="main-content">
        <div className="normalize-section normalize-container">
          <Hero />
        </div>

        <div className="normalize-section normalize-container">
          <Metrics />
        </div>

        <div className="normalize-section normalize-container">
          <WhatRemains />
        </div>

        <div className="normalize-section normalize-container">
          <PlayunmuteShowcase />
        </div>

        <div className="normalize-section normalize-container">
          <Projects />
        </div>

        <div className="normalize-section normalize-container">
          <SocialProof />
        </div>

        <div className="normalize-section normalize-container">
          <Mentorship />
        </div>

        <div className="normalize-section normalize-container">
          <Skills />
        </div>

        <div className="normalize-section normalize-container">
          <Footer />
        </div>
      </main>
    </>
  );
}
