import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple to use',
    description: (
      <>
        Just install the binary executable <code>deck</code> and you are good to go.
      </>
    ),
  },
  {
    title: 'No Kubernetes knowledge required',
    description: (
      <>
        Find a <i>Deckfile</i> that is describing your setup,
        run <code>deck get ...</code> and you are ready to work.
      </>
    ),
  },
  {
    title: 'All dependencies managed',
    description: (
      <>
         <i>Helm</i>, <i>kustomize</i>, <i>k3d</i>, <i>kubectl</i>? Getdeck manages
         all dependencies for your setup so you don't have to.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
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
