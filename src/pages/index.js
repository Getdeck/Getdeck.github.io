import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GitHubButton from 'react-github-btn';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src="img/getdeck-header.png"/>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>

                        <Link
                            className="button button--secondary button--lg"
                            style={{"margin-right": "20px"}}
                            to="/docs/">
                            Getting started with the CLI
                        </Link>


                        <Link
                            className="button button--secondary button--lg"
                            to="/beiboot/">
                            Getting started with Getdeck
                        </Link>
                    
                </div>
            <br/><GitHubButton href="https://github.com/Getdeck/getdeck" data-size="large" data-show-count="true" aria-label="Star Getdeck on GitHub">Star Getdeck on Github</GitHubButton>
                            <GitHubButton href="https://github.com/Getdeck/getdeck/issues" data-icon="octicon-issue-opened" data-size="large" data-show-count="true" aria-label="Issue Getdeck/getdeck on GitHub">Issues</GitHubButton>
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
            <hr/>
            <main>
                <section>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>The Problem</strong></h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    With complex application landscapes, <strong>running Kubernetes-based workloads locally becomes infeasible</strong>. Swiftly testing applications with different Kubernetes versions can be impossible depending on organizational policies. <strong>Spinning up a Kubernetes cluster with Terraform or Cloud providers takes too long</strong> for a convenient development workflow or CI pipelines.
                                </p>
                            </center>
                            
                        </div>
                    </div>
                </section>
            
                <hr style={{"margin-bottom": "0"}}/>
                 <section className={clsx(styles.ornamentSection)}>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <p className={clsx(styles.textBlock)}>
                                <strong>Getdeck is a Kubernetes-in-Kubernetes solution</strong> born from the idea to provide devs with a simple yet flexible solution to spin up a hybrid cloud development infrastructure. 

                            </p>
                            <Link
                                className={clsx("button button--primary button--lg", styles.center)}
                                to="/docs/installation/">
                                We're open source
                            </Link>
                        </div>
                    </div>
                </section>
                <hr style={{"margin-top": "0"}}/>

                <section>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>The Solution</strong></h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    With Getdeck you only need one host Kubernetes cluster that runs the operator. <strong>Getdeck creates Kubernetes clusters as deployments in a matter of seconds</strong>. The operator creates several ways to connect to that cluster and makes it simple to get started working with Kubernetes.
                                </p>
                            </center>
                            
                        </div>
                    </div>
            <hr/>
                </section>
                <div>
                    <HomepageFeatures/>
                </div>

                <hr/>
                <section>
                    <div className={clsx(styles.section)}>
                        <h2 className={clsx(styles.sectionHeading)}>Usecases for ephemeral dev clusters</h2>
                    </div>
                </section>
                <section className={clsx(styles.sectionSideBySide)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>Exp 1: Simulate the real world</h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            When developing an application that needs to handle high traffic and scale dynamically, utilizing cloud-based development clusters becomes crucial. By provisioning a Kubernetes cluster in the cloud, you can <strong>simulate real-world scenarios and test the application's performance under heavy loads</strong>. You can easily scale up the cluster, simulate thousands of concurrent users, and analyze how the application handles the increased traffic. <p/> <p>This approach allows you to fine-tune your application's scalability and optimize resource utilization before deploying it to the production environment.</p>

                        </p>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/supported-kubernetes-distributions/">
                            Supported Kubernetes Distros
                        </Link>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/provider.png" alt="supported Kubernetes providers"/>
                    </figure>
                </section>
                <section className={clsx(styles.sectionSideBySide, styles.sideBySideReversed)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>Exp 2: Collaboration during development</h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            <p>Suppose you are working on a feature that requires collaboration with other team members, such as frontend developers, backend engineers, and database administrators. By using cloud-based development clusters, you can <strong>create a shared environment accessible to the entire team</strong>. </p>Each team member can work on their respective components, deploy changes to the cluster, and validate the integration of their code with the overall application. This collaborative approach fosters efficient teamwork, reduces conflicts, and streamlines the development process.
                        </p>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/getting-started/">
                            Getting started
                        </Link>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/workflow_1.png" alt="workflow of getdeck"/>
                    </figure>
                </section>
                <section className={clsx(styles.sectionSideBySide)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <h3 className={clsx(styles.sectionHeading)}>Exp 3: Test with Production-Like configs: </h3>
                        <p className={clsx(styles.sideBySideContentText)}>
                            In a cloud-native environment, applications often depend on various external services, such as databases, message queues, or caching systems.<p/><p>Instead of setting up and managing local versions of these services, you can leverage cloud-native services provided by the cloud provider. For example, <strong>you can use managed database services like Amazon RDS or Google Cloud SQL directly in your cloud-based development cluster</strong>. </p>This allows you to test your application against production-like configurations and ensures that your code integrates seamlessly with these services. It also simplifies the development process by reducing the overhead of managing local infrastructure and dependencies.

                        </p>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/locations.png" alt="workload locations Getdeck can work with"/>
                    </figure>
                </section>
                
                <hr/>
                
                 <section>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Quick Demo</strong></h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    PLACEHOLDER FOR ANIMATION
                                </p>
                            </center>
                            
                        </div>
                    </div>
                </section>

                <hr/>

                 <section>
                    <div className={clsx(styles.section)}>
                        <h2 className={clsx(styles.sectionHeading)}><strong>How it works</strong></h2>
                    </div>
                    <div>
                        <center>
                        <img src="img/locations.png" alt="workload locations Getdeck can work with"/>
                        </center>
                    </div>
                </section>

                <hr/>

                <section>
                    <div className={clsx(styles.section)}>
                        <h2 className={clsx(styles.sectionHeading)}>Kubernetes-in-Kubernetes</h2>
                    </div>
                </section>
                <section className={clsx(styles.sectionSideBySide, styles.sideBySideReversed)}>
                    <div className={clsx(styles.sideBySideContent)}>
                        <p className={clsx(styles.sideBySideContentText)}>
                            There are a couple of advantages running a logical ("virtual") Kubernetes cluster running within a physical Kubernetes cluster. The main focus of Getdeck is the <strong>on-demand creation of Kubernetes clusters for development and testing</strong> purposes. 
                        </p>
                        <p>Getdeck also has potential for other scenarios, i.g. strong workload isolation, multi-tenancy, CI, security and more.
                            It comes with a Kubernetes operator that handles the management of ad-hoc logical clusters based on the requested parameters. This includes the Kubernetes version, the way of exposing the cluster, lifetime and so on.
                        </p>
                        <Link
                            className="button button--secondary button--lg"
                            to="/wharf/">
                            Go to Wharf
                        </Link>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/beiboot-ops.png" alt="the Getdeck Wharf logo"/>
                    </figure>
                </section>
                <hr/>
                
                <section>
                    <div className={clsx(styles.section)}>
                        <h2 className={clsx(styles.sectionHeading)}>A Local Kubernetes Cluster <br/> in the Cloud</h2>
                    </div>
                </section>
                 
                <section className={clsx(styles.sectionSideBySide)}>
                    <div className={clsx(styles.sideBySideContent)}>
                            <p className={clsx(styles.sideBySideContentText)}>
                            Getdeck's client <strong>does not only order a cluster based on the given parameters but also establishes a secure connection</strong> to it. It makes the requested ports (usually port 80 for http, port 443 for https) available on localhost, effectively making remote services available as they would run on the local machine. That happens entirely automatically using a secured mTLS connection. This works for any port.

                        </p>
                    </div>
                    <figure className={clsx(styles.sectionFigure)}>
                        <img src="img/beiboot-client-connection.png" alt="workload locations Getdeck can work with"/>
                    </figure>
                </section>
                <hr/>

                  <section>
                    <div className={clsx(styles.section.center)}>
                        <h2 className={clsx(styles.sectionHeading)}>Why should I develop in a cloud based cluster instead of locally?
                        </h2><br/>
                        <center><p className={clsx(styles.textBlock)}>Using instant ephemeral cloud-based development clusters instead of developing everything locally on your machine offers several advantages for developers working on applications that run on top of Kubernetes in a cloud-native environment. Here are some key benefits:</p>
                        </center>
                    </div>
                </section>
                
                <section>
                        <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Replicating Production </strong><br/>Environments</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    Cloud-based development clusters allow you to create an environment that closely resembles your production environment, ensuring consistency and reducing potential deployment issues. It enables you to replicate the same infrastructure, networking configurations, and other dependencies, providing a more accurate development and testing experience.
                                </p>
                            </center>
                            
                        </div>
                        
                    </div>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Scalability and Resource </strong> <br/> Management</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    Kubernetes clusters are designed to handle scalability and resource management efficiently. By utilizing cloud-based clusters, you can easily scale up or down your development environment to match the needs of your application. This flexibility enables you to test and optimize your code in a realistic environment that closely resembles the behavior of your production setup.
                                </p>
                            </center>
                            
                        </div>
                        
                    </div>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Isolation and Dependency</strong><br/> Management</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    Developing locally can sometimes lead to conflicts between different dependencies and versions, especially when working on multiple projects simultaneously. Cloud-based development clusters provide isolation, allowing you to manage dependencies and versions more effectively. Each project can have its dedicated cluster, eliminating potential conflicts and making it easier to manage the software stack.
                                </p>
                            </center>
                            
                        </div>
                        
                    </div>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Collaboration and</strong><br/> Teamwork</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    Cloud-based development clusters facilitate collaboration among team members. With shared access to the same cluster, developers can easily collaborate, share code, and troubleshoot issues together. It promotes a more cohesive and efficient teamwork environment, particularly when working on complex cloud-native applications.
                                </p>
                            </center>
                            
                        </div>
                        
                    </div>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Improved Development</strong><br/> Speed</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    Cloud-based clusters offer faster deployment and provisioning times compared to local development setups. They provide a streamlined workflow, allowing you to quickly spin up and tear down clusters as needed. This agility helps accelerate the development process and reduces the time required for setting up and maintaining the development environment.
                                </p>
                            </center>
                            
                        </div>
                        
                    </div>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Access to Cloud-Native</strong><br/> Services</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    Cloud providers offer a wide range of managed services that can be integrated with Kubernetes clusters. By utilizing cloud-based development clusters, you can easily leverage these services, such as managed databases, message queues, monitoring, and logging services. It simplifies the integration process and allows you to focus more on developing and testing your application logic.
                                </p>
                            </center>
                            
                        </div>
                        
                    </div>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <h3 className={clsx(styles.sectionHeading)}><strong>Cost</strong><br/> Efficiency</h3>
                            <br/>
                            <center>
                                <p className={clsx(styles.textBlock)}>
                                    With cloud-based development clusters, you only pay for the resources you need during development and testing phases. It eliminates the need for maintaining and upgrading local hardware to meet the requirements of running complex Kubernetes clusters. This cost-effective approach ensures that resources are utilized efficiently and reduces upfront infrastructure costs.

                                </p>
                            </center>
                            
                        </div>
                        
                    </div>
                </section>
                   <hr style={{"margin-bottom": "0"}}/>
                 <section className={clsx(styles.ornamentSection)}>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <p className={clsx(styles.textBlock)}>
                                Overall, utilizing instant ephemeral cloud-based development clusters offers developers working on cloud-native applications built on top of Kubernetes several advantages, including replicating production environments, scalability, isolation, collaboration, improved development speed, access to cloud-native services, and cost efficiency. It enables developers to focus on building high-quality applications and accelerates the delivery of reliable and scalable cloud-native solutions.

                            </p>
                            <Link
                                className={clsx("button button--primary button--lg", styles.center)}
                                to="/docs/installation/">
                                Try it now
                            </Link>
                        </div>
                    </div>
                </section>
                <hr style={{"margin-top": "0"}}/>
                 <section>
                    <div className={clsx(styles.singleItemSection, styles.section)}>
                        <div className={clsx(styles.center)}>
                            <GitHubButton href="https://github.com/Getdeck/getdeck" data-size="large" data-show-count="true" aria-label="Star Getdeck on GitHub">Star Getdeck on Github</GitHubButton>
                            <GitHubButton href="https://github.com/Getdeck/getdeck/issues" data-icon="octicon-issue-opened" data-size="large" data-show-count="true" aria-label="Issue Getdeck/getdeck on GitHub">Issues</GitHubButton>
                        </div>
                    </div>
                </section>

            </main>
        </Layout>
    );
}
