"use client"

import { Tabshead } from "../components/tabshead";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OperationManagement from "../components/products/operationmanagement";
import AttendanceManagement from "../components/products/attendancemanagement";
import Vansales from "../components/products/vansales";
import InfromationCenter from "../components/products/infromationcenter";
import HelpDesk from "../components/products/helpdesk";
import DocumentMangement from "../components/products/documentmangement";
import ExecutionPlanner from "../components/products/executionplanner";


export default function Page() {
  return (
   <div>

<section className="banner-img">
  <img src="template/WebAssets/img/common/headers/about-us-creative-solutions.jpg" alt="about Smartest Developers company" className="img__header" />
</section>
{/* #page-title end */}
{/* Content
    ============================================= */}
<section id="content" style={{marginBottom: 0}}>
  <div className="content-wrap py-0">
    <div className="section client-slide">
      <div className="container clearfix">
   

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
        title={<span className="custom-tab-title">Attendance <br /> Management</span>}
      >
        <div className="tab-pane-content">
          <AttendanceManagement />
        </div>
      </Tab>
      <Tab
        eventKey="operationManagement"
        title={<span className="custom-tab-title">Operation <br /> Management</span>}
      >
        <div className="tab-pane-content">
          <OperationManagement />
        </div>
      </Tab>
      <Tab
        eventKey="vanSalesSoftware"
        title={<span className="custom-tab-title">Van Sales <br /> Software</span>}
      >
        <div className="tab-pane-content">
          <Vansales />
        </div>
      </Tab>
      <Tab
        eventKey="informationCenter"
        title={<span className="custom-tab-title">Information <br /> Center</span>}
      >
        <div className="tab-pane-content">
          <InfromationCenter />
        </div>
      </Tab>
      <Tab
        eventKey="helpDesk"
        title={<span className="custom-tab-title">Help Desk <br /> Management</span>}
      >
        <div className="tab-pane-content">
          <HelpDesk />
        </div>
      </Tab>
      <Tab
        eventKey="dms"
        title={<span className="custom-tab-title">Document <br /> Management</span>}
      >
        <div className="tab-pane-content">
          <DocumentMangement />
        </div>
      </Tab>
      <Tab
        eventKey="eps"
        title={<span className="custom-tab-title">Execution <br /> Planner</span>}
      >
        <div className="tab-pane-content">
          <ExecutionPlanner />
        </div>
      </Tab>
    </Tabs>
  </div>
</div>

      
      </div>
    </div>
    <div className="section">
      <div className="container clearfix">
        <div className="heading-block">
          <h2 data-animate="fadeInUp" className="fadeInUp animated">Guidelines</h2>
          <h4 data-animate="fadeInUp" data-delay={200} className="fadeInUp animated">Our Guidelines for Client Satisfaction</h4>
        </div>
        <div className="row about-guidelines">
          <div className="col-md-6 col-lg-4">
            <div className="card bottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={200}>
              <a href="execution-planner-software">
                <div className="card-body p-0">
                  <img src="template/WebAssets/img/common/pages/skilled-force.png" alt="skill force" className="about_client_guides mb-3" width={60} />
                  <h4 className="mb-2">Skill force</h4>
                  <p className="text-dark text-justify mb-0 g-height-200--lg">Skilled force to ensure services of international standard. In depth analysis to understand the actual requirement and business constraints. Standard design patterns (object oriented) for reusability and faster deployment. Adopt a formula of listen, analyze, advise and implement, in all projects for successful results.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={200}>
              <a href="execution-planner-software">
                <div className="card-body p-0">
                  <img src="template/WebAssets/img/common/pages/our-professional.png" alt="Our professional services" className="about_client_guides mb-3" width={60} />
                  <h4 className="mb-2">Our professional services</h4>
                  <p className="text-dark text-justify mb-0 g-height-200--lg">Our professional services team specializes in providing customers with advanced systems, software, storage and network architecture design consulting, platform integration, enterprise systems management and operation such as network security and advanced system software integration solutions.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={200}>
              <a href="execution-planner-software">
                <div className="card-body p-0">
                  <img src="template/WebAssets/img/common/pages/integrate-people.png" alt="Integrate people and process" className="about_client_guides mb-3" width={60} />
                  <h4 className="mb-2">Integrate people and process</h4>
                  <p className="text-dark text-justify mb-0 g-height-200--lg">We integrate people, processes and technology to deliver solutions tailored to meet our customers’ needs. These solutions help ensure that the necessary talent is available and properly aligned to meet our customers’ network computing needs, as well as business objectives.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={200}>
              <a href="execution-planner-software">
                <div className="card-body p-0">
                  <img src="template/WebAssets/img/common/pages/diversified-business.png" alt="Diversified of business" className="about_client_guides mb-3" width={60} />
                  <h4 className="mb-2">Diversified of business</h4>
                  <p className="text-dark text-justify mb-0 g-height-250--lg">Smartest Developers has a wide range of customers in diversified fields of business – retail, supply chains, service industry, manufacturing (food), construction, F&amp;B chains, etc. Smartest Developers have ventured out some of the major IT Solutions in collaboration with its solution partners such as ERP implementation, POS development and Advanced Management Solutions.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={200}>
              <a href="execution-planner-software">
                <div className="card-body p-0">
                  <img src="template/WebAssets/img/common/pages/customer-service.png" alt="Customer services" className="about_client_guides mb-3" width={60} />
                  <h4 className="mb-2">Customer services</h4>
                  <p className="text-dark text-justify mb-0 g-height-250--lg">We focus on IT managed customer services. These fully managed services enable businesses to shift their operational focus from non-core competency management functions to running their business for competitive advantage.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={200}>
              <a href="execution-planner-software">
                <div className="card-body p-0">
                  <img src="template/WebAssets/img/common/pages/broad-services.png" alt="Broad range of services" className="about_client_guides mb-3" width={60} />
                  <h4 className="mb-2">Broad range of services</h4>
                  <p className="text-dark text-justify mb-0 g-height-250--lg">Smartest Developers aims to provide complete Information Technology Solutions in helping our customers deploy business solutions through a broad range of services comprised of consulting, integration, operations assistance and support services for hardware and software, in order to attain optimal level of effectiveness and efficiency in operations and enhance business success.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section client-slide">
      <div className="container clearfix">
        <div className="row">
          <div className="col-lg-6 py-3 fadeInUp animated" data-animate="fadeInUp">
            <div className="team team-list clearfix">
              <div className="team-image width">
                <img className="rounded-circle" src="/template/WebAssets/img/common/pages/vision.png" alt="Smartest Developers Vision" />
              </div>
              <div className="team-desc">
                <div className="team-title"><h4>Vision</h4></div>
                <div className="team-content text-justify">To develop and deliver high-quality software, networking &amp; project consultation services and provide superior support to clients and create a result driven professional IT solutions company.</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-3 fadeInUp animated" data-animate="fadeInUp">
            <div className="team team-list clearfix">
              <div className="team-image width">
                <img className="rounded-circle" src="/template/WebAssets/img/common/pages/mission.png" alt="Smartest Developers Mission" />
              </div>
              <div className="team-desc">
                <div className="team-title"><h4>Mission</h4></div>
                <div className="team-content text-justify">To satisfy our clients using leading technologies, following industry best practices, maintaining quality, delivering on time &amp; within budget; managed by a talented pool of professionals who are motivated by perfect execution and successful results.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="section client-slide pb-0">
      <div className="container clearfix">
        <div className="row align-items-center">
          <div className="col_half nobottommargin fadeInLeft animated" data-animate="fadeInLeft">
            <div className="heading-block mb-4">
              <h2>Our Goals:</h2>
            </div>
            <div className="features">
              <ul className="mb-0" style={{listStyleType: 'none'}}>
                <li>
                  <i className="icon-line-circle-check pr-2" />
                  To create an innovative environment that empowers ideas, foster creativity &amp; uses latest technologies to deliver the best solutions to all the clients.
                </li>
                <li>
                  <i className="icon-line-circle-check pr-2" />
                  To develop organizational capacity investing in efficient systems, methods and know-how and deliver right business solution for our clients’ specific situations.
                </li>
                <li>
                  <i className="icon-line-circle-check pr-2" />
                  To invest in our most valuable asset’s“People”, personal and professional development.
                </li>
                <li>
                  <i className="icon-line-circle-check pr-2" />
                  To communicate effectively using professional tools, to ensure accurate analysis of client’s needs.
                </li>
                <li>
                  <i className="icon-line-circle-check pr-2" />
                  To enhance client trust by always being fair, honest &amp; displaying integrity in all our decision and actions.
                </li>
              </ul>
            </div>
          </div>
          <div className="col_half nobottommargin center col_last fadeInRight animated" data-animate="fadeInRight">
            <img src="template/WebAssets/img/common/about_creative_solutions.png" alt="Smartest Developers Goals" />
          </div>
        </div>
      </div>
    </div>
    <div className="section nobg my-0">
      <div className="container clearfix">
        <div className="heading-block mb-4">
          <h2>We Provide</h2>
        </div>
        <div className="col_one_fourth nobottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={10}>
          <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder box-shadow py-3">
            <h4 className="mb-1">World class software solutions.</h4>
          </div>
        </div>
        <div className="col_one_fourth nobottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={200}>
          <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder box-shadow py-3">
            <h4 className="mb-1">Integration for business intelligence.</h4>
          </div>
        </div>
        <div className="col_one_fourth nobottommargin fadeInUp animated" data-animate="fadeInUp" data-delay={400}>
          <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder box-shadow py-3">
            <h4 className="mb-1">Building the network foundations.</h4>
          </div>
        </div>
        <div className="col_one_fourth nobottommargin col_last fadeInUp animated" data-animate="fadeInUp" data-delay={600}>
          <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder box-shadow py-3">
            <h4 className="mb-1">Consultancy services upon analyzing requirements.</h4>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  </div>
</section>

   </div>
 
 );
}
