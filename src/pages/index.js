import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
// Static Image
import DocusaurusImageUrl from "@site/static/img/docusaurus.png";

// Rive
import { useRive } from "@rive-app/react-canvas";
// Need to call local riv src
import useBaseUrl from "@docusaurus/useBaseUrl";

// React Image Gallery
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Create Rive component
  // use base url pointing image src
  // stateMachines needed to trigger the animation
  // and the value should be exactly same as what defined before
  const { RiveComponent, rive } = useRive({
    src: useBaseUrl("/img/cat.riv"),
    artboard: "Cat",
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <ImageGallery items={images} />
        </div>
        {/* How to call static image */}
        <img src={DocusaurusImageUrl} />
        {/* Hot to call riv assets */}
        <RiveComponent style={{ width: 400, height: 400 }} />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
