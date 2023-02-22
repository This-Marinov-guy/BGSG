// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Demo from './page-demo/Demo';
import MainDemo from './home/MainDemo';
import Startup from './home/Startup';
import Paralax from './home/Paralax';
import HomePortfolio from './home/HomePortfolio';
import DigitalAgency from './home/DigitalAgency';
import CreativeAgency from './home/CreativeAgency';
import PersonalPortfolio from './home/PersonalPortfolio';
import Business from './home/Business';
import StudioAgency from './home/StudioAgency';
import PortfolioLanding from './home/PortfolioLanding';
import CreativeLanding from './home/CreativeLanding';
import HomeParticles from './home/HomeParticles';
import CreativePortfolio from './home/CreativePortfolio';
import DesignerPortfolio from './home/DesignerPortfolio';
import InteriorLanding from './home/Interior';
import CorporateBusiness from './home/CorporateBusiness';
import InteractiveAgency from './home/InteractiveAgency';

// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';
import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path='/' component={CreativeAgency}/>
                        
                        <Route exact path={`/`} component={Demo}/>
                        <Route exact path={`/main-demo`} component={MainDemo}/>
                        <Route exact path={`/dark-main-demo`} component={DarkMainDemo}/>
                        <Route exact path={`/startup`} component={Startup}/>
                        <Route exact path={`/paralax`} component={Paralax}/>

                        <Route exact path={`/digital-agency`} component={DigitalAgency}/>
                        <Route exact path={`/personal-portfolio`} component={PersonalPortfolio}/>
                        <Route exact path={`/studio-agency`} component={StudioAgency}/>
                        <Route exact path={`/business`} component={Business}/>
                        <Route exact path={`/portfolio-home`} component={HomePortfolio}/>
                        <Route exact path={`/portfolio-landing`} component={PortfolioLanding}/>
                        <Route exact path={`/creative-landing`} component={CreativeLanding}/>
                        <Route exact path={`/home-particles`} component={HomeParticles}/>
                        <Route exact path={`/dark-portfolio-landing`} component={DarkPortfolioLanding}/>
                        <Route exact path={`/designer-portfolio`} component={DesignerPortfolio}/>
                        <Route exact path={`/creative-portfolio`} component={CreativePortfolio}/>
                        <Route exact path={`/interior-landing`} component={InteriorLanding}/>
                        <Route exact path={`/corporate-business`} component={CorporateBusiness}/>
                        <Route exact path={`/interactive-agency`} component={InteractiveAgency}/>

                        {/* Element Layot */}
                        <Route exact path={`/service`} component={Service}/>
                        <Route exact path={`/service-details`} component={ServiceDetails}/>
                        <Route exact path={`/contact`} component={Contact}/>
                        <Route exact path={`/about`} component={About}/>
                        <Route exact path={`/portfolio-details`} component={PortfolioDetails}/>
                        <Route exact path={`/blog`} component={Blog}/>
                        <Route exact path={`/blog-details`} component={BlogDetails}/>

                        {/* Blocks Elements  */}
                        <Route exact path={`/team`} component={Team}/>
                        <Route exact path={`/counters`} component={Counters}/>
                        <Route exact path={`/testimonial`} component={Testimonial}/>
                        <Route exact path={`/portfolio`} component={Portfolio}/>
                        <Route exact path={`/video-popup`} component={VideoPopup}/>
                        <Route exact path={`/gallery`} component={Gallery}/>
                        <Route exact path={`/clint-logo`} component={Brand}/>
                        <Route exact path={`/progressbar`} component={ProgressBar}/>
                        <Route exact path={`/contact-form`} component={ContactForm}/>
                        <Route exact path={`/google-map`} component={GoogleMap}/>
                        <Route exact path={`/columns`} component={Columns}/>
                        <Route exact path={`/pricing-table`} component={PricingTable}/>


                        
                        <Route path={`/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();