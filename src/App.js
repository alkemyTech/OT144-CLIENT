import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeForm from './Components/Home/HomeForm';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import DataScreen from './Components/Testimonials/DataScreen';
import EditDataScreen from './Components/Testimonials/EditDataScreen';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import Actividades from './Components/Activities/Actividades';
import AboutPrincipal from './Components/About/AboutPrincipal';
import LoginForm from './Components/Auth/LoginForm';
import OrganizationEditForm from './Components/Home/BackOffice/OrganizationEditForm';
import ScreenDashboardPage from './Components/ScreenDashboard/ScreenDashboardPage'
import HomePage from './Components/Home/HomePage'
import Register from './Components/Auth/RegisterForm';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/organization/edit-home" component={HomeForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/organization" component={DataScreen}/>
          <Route path="/backoffice/organization-edit" component={EditDataScreen}/>
          <Route path="/backoffice/members/edit" component={MembersForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/actividades" component={Actividades} />
          <Route path="/about-us" component={AboutPrincipal} />
          <Route path="/login" component={LoginForm} />    
          <Route path="/backoffice" component={ScreenDashboardPage} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
