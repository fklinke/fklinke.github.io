import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Translate from "@docusaurus/Translate";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="ZF [pro]Parts API Docs">
            <div className="container padding--lg">
                <div className="row">
                    <div className="col col-lg--12">
                        <div className={clsx("hero", "shadow--lw", "border--rounded")}>
                            <div className="container">
                                <h1 className="hero__title">ZF [pro]Parts APIs</h1>
                                <p className="hero__subtitle">
                                    <Translate id="theme.api.description">
                                        APIs for merchants and partners
                                    </Translate>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row margin-vert--lg">
                    <div className="col col-lg--12">
                        <div className="row">
                            <div className="col col-lg--4">
                                <div className="card">
                                    <div className="card__header">
                                        <h3>
                                            <Translate id="theme.api.offerTitle">
                                                Offers API
                                            </Translate>
                                        </h3>
                                    </div>
                                    <div className="card__body">
                                        <p>
                                            <Translate id="theme.api.offerDescription">
                                                Merchant Offer Endpoints
                                            </Translate>
                                        </p>
                                    </div>
                                    <div className="card__footer">
                                        <Link className="button button--secondary button--block"
                                              to="docs/pro-parts-api-offer/api-zf-pro-parts-offers" target="_blank">
                                            <Translate id="theme.api.seeDocs">
                                                See docs
                                            </Translate>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-lg--4">
                                <div className="card">
                                    <div className="card__header">
                                        <h3>
                                            <Translate id="theme.api.orderTitle">
                                                Orders API
                                            </Translate>
                                        </h3>
                                    </div>
                                    <div className="card__body">
                                        <p>
                                            <Translate id="theme.api.orderDescription">
                                                Merchant Order Endpoints
                                            </Translate>
                                        </p>
                                    </div>
                                    <div className="card__footer">
                                        <Link className="button button--secondary button--block"
                                              to="docs/pro-parts-api-order/api-zf-pro-parts-orders" target="_blank">
                                            <Translate id="theme.api.seeDocs">
                                                See docs
                                            </Translate>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-lg--4">
                                <div className="card">
                                    <div className="card__header">
                                        <h3>
                                            <Translate id="theme.api.partnerTitle">
                                                Partners API
                                            </Translate>
                                        </h3>
                                    </div>
                                    <div className="card__body">
                                        <p>
                                            <Translate id="theme.api.partnerDescription">
                                                Partners Integration Endpoints
                                            </Translate>
                                        </p>
                                    </div>
                                    <div className="card__footer">
                                        <Link className="button button--secondary button--block"
                                              to="docs/pro-parts-api-partner/api-zf-pro-parts-partners" target="_blank">
                                            <Translate id="theme.api.seeDocs">
                                                See docs
                                            </Translate>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
