"use client"
import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import SmartPhone from './smartPhone'
import WebsiteDevelopment from './websiteDevelopment'
import Ecommerce from "./ecommerce"
import CustomSoftware from './customSoftware'


const ServiceTab = () => {
  return (
    <div>

<div className="row">
  <div className="col-12">

  
  
    <Tabs
      defaultActiveKey="home"  
      id="horizontal-tabs-example"
      className="border p-3 shadow-sm rounded"
      style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
    >
      <Tab
        eventKey="home"
        title={<span className="custom-tab-title">Smartphone <br /> Application Development</span>}
      >
        <div className="tab-pane-content">
         <SmartPhone/>
        </div>
      </Tab>
      <Tab
        eventKey="operationManagement"
        title={<span className="custom-tab-title">Custom <br /> Software Development</span>}
      >
        <div className="tab-pane-content">
          <CustomSoftware/>
        </div>
      </Tab>
      <Tab
        eventKey="vanSalesSoftware"
        title={<span className="custom-tab-title">Website <br /> Development</span>}
      >
        <div className="tab-pane-content">
          <WebsiteDevelopment/>
        </div>
      </Tab>
      <Tab
        eventKey="informationCenter"
        title={<span className="custom-tab-title">E-Commmerce <br /> Development</span>}
      >
        <div className="tab-pane-content">
          <Ecommerce/>
        </div>
      </Tab>
    
    </Tabs>
  </div>
</div>

    </div>
  )
}

export default ServiceTab