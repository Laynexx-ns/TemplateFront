import React from 'react';
import {UserProvider, useUser} from "@/context/UserContext";
import { ReloginForm } from "@/components/shared/relogin-form";
import {AppRoutes} from "../routes/AppRoutes";

function AppContent() {
    const { needRelogin, setNeedRelogin } = useUser();

    return (
        <div>
            <AppRoutes/>
            <span className={'text-9xl'}> {String(needRelogin)} </span>



            {needRelogin && <ReloginForm onClose={() => setNeedRelogin(false)}/>}
        </div>
    );
}

function App() {
    return (
        <UserProvider>
            <AppContent />
        </UserProvider>
    );
}

export default App;