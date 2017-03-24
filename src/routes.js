/**
 * Created by n0256343 on 3/16/2017.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);

// This route is essentially saying the base root/app etc is App
// The first page on the App is IndexRoute which is HomePage
// And then all the other routes are /whateverpage so the file path is
// https://localhost:3000/courses etc