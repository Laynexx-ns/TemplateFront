import React from 'react';

import {Button, Input} from "@/components/ui";
import {LoginButton} from "@/components/shared/buttons/login-button";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col min-h-screen font-raleway bg-black text-white">
            <header className="flex justify-between items-center px-5 gap-30 pt-5">
                <div className="flex flex-row gap-16">
                    <Link to={'/pages/about-us-page'}>
                        <Button variant={'link'} className={'text-white'}>О нас</Button>
                    </Link>
                    <Link to={'pages/sidebar-page'}>
                        <Button variant={'link'} className={'text-white'}>side bar page test</Button>
                    </Link>
                    <Button variant={'link'} className={'text-white'}>Товары</Button>
                    <Button variant={'link'} className={'text-white'}>Кнопка</Button>
                </div>

                <Input className={'rounded-2xl w-[40%]'}placeholder={'   Найти...'}/>

                <div className="flex flex-row gap-8">
                    <LoginButton></LoginButton>
                    <Link to={'/pages/account-page'}>
                        <Button className={'bg-gray-400 text-black'}> Мой аккаунт </Button>
                    </Link>
                </div>


            </header>

            <main className="flex-grow flex justify-center items-center text-center">
                <h1 className=" text-9xl hover:shadow-2xl" style={{ textShadow: '40px rgba(250, 250, 250, 0.5)' }}>
                    TEXT
                </h1>
            </main>

            <div className="border-b-2 border-gray-50/50 mb-5" />
            <footer className="bg-black flex justify-between gap-32 mx-auto px-5 pb-5 text-center">
                <p className="text-[12px] text-start text-gray-100/50">copyrighted by laynexx(rofl)</p>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="text-[12px] text-start text-gray-100/50">
                        <h1>About sus</h1>
                        <h1>Links</h1>
                        <h1>Open storage</h1>
                        <h1>Write sus</h1>
                    </div>
                ))}
            </footer>
        </div>
    );
}

export default App;