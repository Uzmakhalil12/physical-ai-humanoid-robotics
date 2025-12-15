import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/qwen-textbook/physical-ai-foundations">
            Read the Book 📚
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A Comprehensive Guide to Physical AI, Robotics, and Embodied Intelligence">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>🤖 Advanced Robotics</h3>
                  <p>Learn about cutting-edge humanoid robotics and AI integration.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>🧠 Physical AI</h3>
                  <p>Discover how artificial intelligence interacts with the physical world.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding-horiz--md">
                  <h3>📚 Comprehensive Guide</h3>
                  <p>Complete textbook covering all aspects of embodied intelligence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className="container padding-vert--xl text--center">
            <h2>Physical AI & Humanoid Robotics</h2>
            <p className="padding-horiz--md">
              This comprehensive textbook explores the fascinating intersection of artificial intelligence and physical systems.
              From fundamental concepts to advanced applications, discover how robots perceive, learn, and interact with the real world.
            </p>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container text--center padding-vert--xl">
            <h2>Start Your Journey</h2>
            <p>Begin exploring the future of robotics and AI today</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/qwen-textbook/physical-ai-foundations">
                Read Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}