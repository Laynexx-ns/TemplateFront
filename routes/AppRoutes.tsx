import React from  'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "@/main-page";
import AboutUsPage from "../pages/about-us-page";
import AccountPage from "../pages/account-page";


export const AppRoutes: React.FC = () =>{
    return(
        <Router>
            <Routes>
                <Route path={'/'} element={<MainPage/>} />
                <Route path={'/pages/about-us-page'} element={<AboutUsPage/>}/>
                <Route path={'/pages/account-page'} element={<AccountPage/>}/>
            </Routes>
        </Router>
    )
}