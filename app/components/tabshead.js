"use client"
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Tabshead() {
  return (
    <div className="row">
    <div className="d-flex">
      <Tabs
        defaultActiveKey="profile"
        id="vertical-tabs-example"
        className="flex-column me-6 border p-3 shadow-sm rounded"
        style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} // Adding box shadow to the tabs container
      >
        {/* Tab 1: Attendance Management */}
        <Tab
          eventKey="home"
          title="Attendance Management"
          style={{ flex: 1 }} // Ensuring the tab width is equal
        >
          <div>
            <h5>Daily Task Execution Planner Software</h5>
            <p>
              CreativeTime Attendance Management Software helps businesses manage employee attendance and daily task execution efficiently. It offers features like real-time tracking, automated reporting, and detailed analytics to optimize workforce management.
            </p>
          </div>
        </Tab>

        {/* Tab 2: Inventory Management */}
        <Tab
          eventKey="profile"
          title="Operation Management"
          style={{ flex: 1 }} // Ensuring the tab width is equal
        >
          <div>
            <h5>Comprehensive Inventory Control</h5>
            <p>
            The Smart Brew Operation Management Software provides a comprehensive solution for efficiently managing all aspects of retail operations in a unified system. It simplifies the management of recurring workflows for the team, ensuring seamless coordination. With just a single click, you can effortlessly access the status of multiple checklists, enabling you to gain a holistic view of the organization's activities..
            </p>
          </div>
        </Tab>

        {/* Tab 3: Restaurant Management */}
        <Tab
          eventKey="contact"
          title="Restaurant Management"
          style={{ flex: 1 }} // Ensuring the tab width is equal
        >
          <div>
            <h5>Efficient Restaurant Operations</h5>
            <p>
              Our Restaurant Management Software streamlines restaurant operations by integrating table booking, menu management, order processing, and billing. It helps improve customer experience and enhances the operational efficiency of restaurants.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  </div>
  )
}
