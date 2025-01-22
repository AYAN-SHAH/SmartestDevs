'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useEffect } from 'react';

export default function PortfolioComponent() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link href="#v-pills-web" passHref legacyBehavior>
                            <a className="nav-link active" id="v-pills-web-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-web" aria-selected="true">Website Development</a>
                        </Link>
                        <Link href="#v-pills-app" passHref legacyBehavior>
                            <a className="nav-link" id="v-pills-app-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-app" aria-selected="false">Mobile Application</a>
                        </Link>
                        <Link href="#v-pills-attendence" passHref legacyBehavior>
                            <a className="nav-link" id="v-pills-attendence-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-attendence" aria-selected="false">Attendance</a>
                        </Link>
                        <Link href="#v-pills-pos" passHref legacyBehavior>
                            <a className="nav-link" id="v-pills-pos-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-pos" aria-selected="false">POS Software</a>
                        </Link>
                        <Link href="#v-pills-ecommerce" passHref legacyBehavior>
                            <a className="nav-link" id="v-pills-ecommerce-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-ecommerce" aria-selected="false">E-Commerce</a>
                        </Link>
                        <Link href="#v-pills-drivethru" passHref legacyBehavior>
                            <a className="nav-link" id="v-pills-drivethru-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-drivethru" aria-selected="false">Drive-Thru</a>
                        </Link>
                        <Link href="#v-pills-digital" passHref legacyBehavior>
                            <a className="nav-link" id="v-pills-digital-tab" data-bs-toggle="pill" role="tab" aria-controls="v-pills-digital" aria-selected="false">Digital Signage</a>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-web" role="tabpanel" aria-labelledby="v-pills-web-tab">
                            <h3>Website Development</h3>
                            <p>This is the content for Website Development. We are working on it....</p>
                        </div>
                        <div className="tab-pane fade" id="v-pills-app" role="tabpanel" aria-labelledby="v-pills-app-tab">
                            <h3>Mobile Application</h3>
                            <p>This is the content for Mobile Application. We are working on it....</p>
                        </div>
                        <div className="tab-pane fade" id="v-pills-attendence" role="tabpanel" aria-labelledby="v-pills-attendence-tab">
                            <h3>Attendance</h3>
                            <p>This is the content for Attendance. We are working on it....</p>
                        </div>
                        <div className="tab-pane fade" id="v-pills-pos" role="tabpanel" aria-labelledby="v-pills-pos-tab">
                            <h3>POS Software</h3>
                            <p>This is the content for POS Software. We are working on it....</p>
                        </div>
                        <div className="tab-pane fade" id="v-pills-ecommerce" role="tabpanel" aria-labelledby="v-pills-ecommerce-tab">
                            <h3>E-Commerce</h3>
                            <p>This is the content for E-Commerce. We are working on it....</p>
                        </div>
                        <div className="tab-pane fade" id="v-pills-drivethru" role="tabpanel" aria-labelledby="v-pills-drivethru-tab">
                            <h3>Drive-Thru</h3>
                            <p>This is the content for Drive-Thru. We are working on it....</p>
                        </div>
                        <div className="tab-pane fade" id="v-pills-digital" role="tabpanel" aria-labelledby="v-pills-digital-tab">
                            <h3>Digital Signage</h3>
                            <p>This is the content for Digital Signage. We are working on it....</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .nav-pills .nav-link {
                    border-radius: 0;
                    padding: 1rem;
                    text-align: center;
                    color: black;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                    margin-bottom: 0.5rem;
                }
                .nav-pills .nav-link.active {
                    background-color: #0e2354;
                    color: white;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
                }
                .nav-pills .nav-link:hover {
                    background-color: #e9ecef;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    color: #C5A746;
                }
                .tab-content {
                    padding: 1.5rem;
                    border: 1px solid #ddd;
                    border-radius: 0.25rem;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                }
                @media (max-width: 768px) {
                    .nav-pills .nav-link {
                        text-align: left;
                        padding: 0.75rem;
                    }
                }
            `}</style>
        </div>
    );
}
