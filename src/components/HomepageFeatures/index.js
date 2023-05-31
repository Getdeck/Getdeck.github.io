import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        icon: 'img/CLI.svg',
        title: 'Fast as hell',
        description: (
            <>
                Fresh ad-hoc Kubernetes cluster in seconds (much faster than Terraform or Cloud-providers)<br/><br/>
            </>
        ),
    },
    {
        icon: 'img/ship-wheel.svg',
        title: 'Worry-free',
        description: (
            <>
                Automatic management of clusters (via lifetime, inactivity, etc.)<br/><br/>
            </>
        ),
    },
    {
        icon: 'img/icons-big-projects.svg',
        title: 'Ready when you are',
        description: (
            <>
                Shelve ("snapshot") a running cluster with state and restore them as often as needed.<br/><br/>
            </>
        ),
    },
    {
        icon: 'img/icons-big-projects.svg',
        title: 'Cost efficient',
        description: (
            <>
                Run isolated workloads within Kubernetes; cheap and with the best resource utilization.
            </>
        ),
    },
    {
        icon: 'img/icons-big-projects.svg',
        title: 'Great collaboration',
        description: (
            <>
                Share your cluster and let your code buddy have a quick look.
            </>
        ),
    },
    {
        icon: 'img/icons-big-projects.svg',
        title: 'Easy distribution',
        description: (
            <>
                Automatic distribution of kubeconfig and tunnel connection to clients (using the Beiboot client package)

            </>
        ),
    },
];

function Feature({ Svg, icon, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
                <img src={icon} alt="" height="100px" />
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
