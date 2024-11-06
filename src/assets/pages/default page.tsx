import React from 'react';
// @ts-ignore
import logo from '/public/Sort.svg';
import {SearchInput} from "@/components/shared";
import {Button, Input} from "@/components/ui";
import {LogIn} from "lucide-react";
import {LoginButton} from "@/components/shared/buttons/login-button";

function App() {
    return (
        <div className="flex flex-col min-h-screen font-raleway bg-black text-white">

            {/*хэдер*/}
            <header className="flex justify-between items-center px-5 gap-30 pt-5">
                <div className="flex flex-row gap-32">
                {/*    тут текстики и кнопочки*/}
                </div>


                {/*ситуативно*/}
                {/*<Input className={'rounded-2xl w-[40%]'} placeholder={'   Найти...'}/>*/}

                {/*кнопочки*/}
                <div className="flex flex-row gap-8">
                    <LoginButton></LoginButton>
                    <Button className={'bg-gray-400 text-black'}> Sign up </Button>
                </div>

                <img className={'w-[100px]'} src={logo} alt="logo" />
            </header>



            {/*_______*/}
            {/*content*/}
            <main className="flex-grow flex justify-center items-center text-center">
                <h1 className=" text-9xl hover:shadow-2xl" style={{ textShadow: '40px rgba(250, 250, 250, 0.5)' }}>
                    TEXT
                </h1>
            </main>


            {/*______*/}
            {/*footer*/}
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