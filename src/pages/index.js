import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GitHubButton from 'react-github-btn'

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src="img/logo_large.png"/>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>

                        <Link
                            className="button button--active button--lg"
                            style={{"margin-right": "20px"}}
                            to="/docs/deck/intro">
                            Introduction
                        </Link>


                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/deck/getting-started">
                            Getting started
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
            description="Getdeck, a CLI that creates reproducible Kubernetes environments for development and testing">
            <HomepageHeader/>
            <main>
                <div>
                    <HomepageFeatures/>
                </div>
                <hr/>
                <section>
                    <div className={clsx(styles.section)}>
                        <h2 className={clsx(styles.sectionHeading)}>Kubernetes-based development and testing worflows done right.</h2>
                    </div>
                </section>
                <section className={clsx(styles.sectionSideBySide)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>On the shoulders of different <strong>Kubernetes providers</strong></h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            Getdeck <strong>installs and silently manages</strong> different Kubernetes distributions for local and remote development scenarios.
                            There is an option for all flavors and requirements. And the best: developers don't even have to know the existence
                            of these tools, nor do they have to know how to set up a cluster.
                        </p>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/deckfile/specs#cluster-definition">
                            Supported Kubernetes Distros
                        </Link>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/provider.png" alt=""/>
                    </figure>
                </section>
                <section className={clsx(styles.sectionSideBySide, styles.sideBySideReversed)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>True <strong>Kubernetes</strong> environments & manageable workflows </h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            Leverage a simple yet comprehensive workflow to rollout Kubernetes-based development and testing
                            environments. Eliminate project onboarding time and let developers work with Kubernetes while
                            providing a docker-compose experience. Getdeck <strong>handles all the tools</strong> so developers don't have to.
                            Finally, set the development mindset for service-oriented architectures.  Getdeck is the building block for your Kubernetes-based development strategy.
                        </p>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/deck/getting-started">
                            Getting started
                        </Link>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/workflow_1.png" alt=""/>
                    </figure>
                </section>
                <section className={clsx(styles.sectionSideBySide)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>Kubernetes resources <strong>at your disposal</strong></h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            Never create dedicated development environments again! Use the Kubernetes workloads you already use for
                            production. This can be every location: ranging from public Helm repositories (especially for 3rd party resources)
                            to private Git repositories. Getdeck allows you to draw all resources across different locations together.
                        </p>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/locations.png" alt=""/>
                    </figure>
                </section>
                <section className={clsx(styles.sectionSideBySide, styles.sideBySideReversed)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>Flexible <strong>workload origins</strong> & standard components</h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            Whether mono-repo or distributed across many different sources: Getdeck easily compiles development workloads
                            from all kinds of sources. Users of Getdeck don't need to know anything about <i>Helm</i>, <i>Kustomize</i> or even how to
                            apply a workload descriptor with <i>kubectl</i>.
                        </p>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/workloads.png" alt=""/>
                    </figure>
                </section>
                <hr style={{"margin-bottom": "0"}}/>
                 <section className={clsx(styles.ornamentSection)}>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}>Download Getdeck</h3>
                            <br/>
                            <Link
                                className={clsx("button button--primary button--lg", styles.center)}
                                to="/docs/deck/installation">
                                We're open source
                            </Link>
                        </div>
                    </div>
                </section>
                <hr style={{"margin-top": "0"}}/>
                <section>
                    <div className={clsx(styles.section)}>
                        <h2 className={clsx(styles.sectionHeading)}>Common development stacks ready to lift off</h2>
                    </div>
                </section>
                <section className={clsx(styles.sectionSideBySide, styles.sideBySideReversed)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>Enjoy well-tested Kubernetes <strong>standard stacks</strong></h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            Getdeck Wharf is a collection of common tech stacks or advanced components running in Kubernetes.
                            Feel free to use the Deckfiles from the wharf for your local development. The well-crafted development
                            setups in the wharf will be checked regularly to prevent a dependency drift and ensure they are working.
                        </p>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/deckfile/wharf">
                            Wharf
                        </Link>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/wharf.png" alt=""/>
                    </figure>
                </section>
                <hr/>
                <section>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Open and Free Community</strong><br/> Based Software</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    We decided to make this project open-source to inspire others with our idea: making Kubernetes a development
                                    platform. <br/>
                                    You can easily give Getdeck a go. If something does not work, open up an issue. Implement another Kubernetes
                                    provider or source compiler. We are more than happy to receive all kinds of feedback and contributions.
                                </p>
                            </center>
                            <GitHubButton href="https://github.com/Getdeck/getdeck" data-size="large" data-show-count="true" aria-label="Star Getdeck on GitHub">Star Getdeck on Github</GitHubButton>
                            <GitHubButton href="https://github.com/Getdeck/getdeck/issues" data-icon="octicon-issue-opened" data-size="large" data-show-count="true" aria-label="Issue Getdeck/getdeck on GitHub">Issues</GitHubButton>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
