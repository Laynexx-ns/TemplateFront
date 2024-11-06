import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import MainPage from './main-page';
import AccountPage from "@/pages/account-page";
import AboutUsPage from "@/pages/about-us-page";

function App() {
    return (
        <Router>
            <nav>
                <Link to={'main-page'}> Главная </Link>
                <Link to={'./src/about-us-page'}> about us </Link>
                <Link to={'src/account-page'}> account </Link>
            </nav>
            <Routes>
                <Route path={'main-page'} element={<MainPage/>}/>
                <Route path={'src/about-us-page'} element={<AboutUsPage/>}/>
                <Route path={'src/account-page'} element={<AccountPage/>}/>
            </Routes>
        </Router>
    )
}

export default App;