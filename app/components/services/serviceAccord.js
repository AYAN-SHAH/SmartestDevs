"use client";
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TabContent1 from './tabcontent1/serviceTab';
import  TabContent2  from './tabcontent2/tabContent2';


function ServiceAccord() {
  return (
    <>
    <div className="long-accordion-container">
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="accordion-header-text">Comprehensive Software Solutions</span>
          </Accordion.Header>
          <Accordion.Body>
           
           <TabContent1 />

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="accordion-header-text">Consultation & IT Strategy</span>
          </Accordion.Header>
          <Accordion.Body>
           
           <TabContent2/>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </>
  );
}

export default ServiceAccord;
