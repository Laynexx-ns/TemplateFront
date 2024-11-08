import React from  'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "@/main-page";
import AboutUsPage from "../pages/about-us-page";
import AccountPage from "../pages/account-page";
import {SidebarPage} from "../pages/sidebar-page";
import {PageTemplate} from "../pages/defaultpage-template";
import {UserProvider} from "@/context/UserContext";


export const AppRoutes: React.FC = () =>{
    return(
        <UserProvider>
            <Router>
                <Routes>
                    <Route path={'/'} element={<MainPage/>} />
                    <Route path={'/pages/about-us-page'} element={<AboutUsPage/>}/>
                    <Route path={'/pages/account-page'} element={<AccountPage/>}/>
                    <Route path={'/pages/sidebar-page'} element={<SidebarPage/>}/>
                    <Route path={'/pages/defaultpage-template'} element={<PageTemplate/>}/>
                </Routes>
            </Router>
        </UserProvider>

    )
}