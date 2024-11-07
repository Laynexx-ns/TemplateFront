import React from 'react';
import {Title} from "@/components/shared";
import {LoginButton} from "@/components/shared/buttons/login-button";
import {Button} from "@/components/ui";
import {Link} from "react-router-dom";



function AboutUsPage(){
    return (
        <div className="flex flex-col min-h-screen font-raleway bg-black text-white">

            {/*хэдер*/}
            <header className="flex justify-between items-center px-5 gap-30 pt-5">
                <div className="flex flex-row">
                    {/*    тут текстики и кнопочки*/}
                    <Link to={'/'}>
                        <Button variant={'link'} className={'text-white'}> Вернуться на главную</Button>
                    </Link>

                </div>


                {/*ситуативно*/}
                {/*<Input className={'rounded-2xl w-[40%]'} placeholder={'   Найти...'}/>*/}

                {/*кнопочки*/}
                <div className="flex flex-row gap-8">
                    <LoginButton></LoginButton>
                    <Button className={'bg-gray-400 text-black'}> Sign up </Button>
                </div>

            </header>


            {/*_______*/}
            {/*content*/}
            <main className="flex-grow flex justify-center items-center text-center">
                <span> just a small project of four people for PROD hackathon </span>
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

export default AboutUsPage;