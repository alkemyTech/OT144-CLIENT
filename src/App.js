import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
<<<<<<< HEAD
=======
import HomeForm from './Components/Home/HomeForm';
>>>>>>> 44b6745cc33ec5ef4838165196c751e9cde7686d
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import SlidesForm from './Components/Slides/SlidesForm';
import DataScreen from './Components/Testimonials/DataScreen';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import AboutPrincipal from './Components/About/AboutPrincipal';
import LoginForm from './Components/Auth/LoginForm';
import OrganizationEditForm from './Components/Home/BackOffice/OrganizationEditForm';
import ScreenDashboardPage from './Components/ScreenDashboard/ScreenDashboardPage'
import HomePage from './Components/Home/HomePage'
import Register from './Components/Auth/RegisterForm';
import Contact from './Components/Contact/Contact';
import CreateNews from './Components/News/CreateNews';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          {/* <Route path="/" exact element={} />           Esta ruta debe ser para el Home */}
          <Route path="/create-activity" element={ActivitiesForm} />
          <Route path="/create-category" element={CategoriesForm} />
          <Route path="/create-news" element={NewsForm} />
          <Route path="/backoffice/create-slide" element={SlidesForm} />
=======
          <Route path="/" exact element={HomePage} />
          <Route path="/contact" element={Contact} />
          <Route path="/create-activity" element={ActivitiesForm} />
          <Route path="/create-category" element={CategoriesForm} />
          <Route path="/create-news" element={CreateNews} />
          <Route path="/backoffice/organization/edit-home" element={HomeForm} />
          <Route path="/backoffice/create-slide" element={SlidesForm} />
          <Route path="/backoffice/organization/edit" element={OrganizationEditForm} />
          <Route path="/backoffice/organization" element={DataScreen}/>
          <Route path="/backoffice/members/edit" element={MembersForm} />
>>>>>>> 44b6745cc33ec5ef4838165196c751e9cde7686d
          <Route path="/create-testimonials" element={TestimonialForm} />
          <Route path="/create-user" element={UserForm} />
          <Route path="/create-member" element={MembersForm} />
          <Route path="/create-project" element={ProjectsForm} />
          <Route path="/school-campaign" element={SchoolCampaign} />
          <Route path="/toys-campaign" element={ToysCampaign} />
<<<<<<< HEAD
=======
          <Route path="/about-us" element={AboutPrincipal} />
          <Route path="/login" element={LoginForm} />    
          <Route path="/backoffice" element={ScreenDashboardPage} />
          <Route path="/register" element={Register} />
>>>>>>> 44b6745cc33ec5ef4838165196c751e9cde7686d
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
