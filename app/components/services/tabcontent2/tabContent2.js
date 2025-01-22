"use client"
import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import SEO from './seo'
import ERPSOLUTION from './erpSolution'
import POSSOLUTION from './posSolutioin'

const TabContent2 = () => {
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
        title={<span className="custom-tab-title">ERP Solution</span>}
      >
        <div className="tab-pane-content">
         <ERPSOLUTION/>
        </div>
      </Tab>
      <Tab
        eventKey="operationManagement"
        title={<span className="custom-tab-title">POS Solution</span>}
      >
        <div className="tab-pane-content">
          <POSSOLUTION/>
        </div>
      </Tab>
      <Tab
        eventKey="vanSalesSoftware"
        title={<span className="custom-tab-title">SEO</span>}
      >
        <div className="tab-pane-content">
          <SEO/>
        </div>
      </Tab>
    
    </Tabs>
  </div>
</div>

    </div>
  )
}

export default TabContent2