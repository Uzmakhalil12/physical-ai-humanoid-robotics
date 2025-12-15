import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '🤖 Advanced Robotics',
    description: (
      <>
        Learn about cutting-edge humanoid robotics and AI integration.
      </>
    ),
  },
  {
    title: '🧠 Physical AI',
    description: (
      <>
        Discover how artificial intelligence interacts with the physical world.
      </>
    ),
  },
  {
    title: '📚 Comprehensive Guide',
    description: (
      <>
        Complete textbook covering all aspects of embodied intelligence.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}