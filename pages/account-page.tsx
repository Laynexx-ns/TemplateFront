import React from 'react';
import {Card, Title} from "@/components/shared";
import {LoginButton} from "@/components/shared/buttons/login-button";
import {Button} from "@/components/ui";
import {Link} from "react-router-dom";
import {useUser} from "@/context/UserContext";



function AboutUsPage(){
    const { user } = useUser(); // Доступ к данным пользователя из контекста

    return (
        <div className="flex flex-col min-h-screen font-raleway bg-black text-white">

            {/* Хэдер */}
            <header className="flex justify-between items-center px-5 gap-30 pt-5">
                <div className="flex flex-row">
                    {/* Текст и кнопки */}
                    <Link to={'/'}>
                        <Button variant={'link'} className={'text-white'}> Вернуться на главную</Button>
                    </Link>
                </div>

                {/* Кнопки */}
                <div className="flex flex-row gap-8">
                    <LoginButton />
                    <Button className={'bg-gray-400 text-black'}> Sign up </Button>
                </div>
            </header>

            {/* Контент */}
            <main className="flex-grow flex flex-col items-center text-center">
                <Card
                    name={'account page'}
                    className={'mt-20'}
                    imageUrl={'https://avatars.githubusercontent.com/u/72513124?v=4'}
                />

                {/* Отображение данных пользователя */}
                {user ? (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">Привет, {user.username}!</h2>
                        <p className="text-sm text-gray-300">Email: {user.email}</p>
                        <p className="text-sm text-gray-300"></p>
                    </div>
                ) : (
                    <p className="mt-8 text-gray-400">Вы не авторизованы</p>
                )}
            </main>

            {/* Футер */}
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