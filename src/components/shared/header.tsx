import React from 'react';
import {cn} from "@/lib/utils";

import {Container} from "@/components/shared";
import {Button} from "@/components/ui/button";
import {LoginButton} from "@/components/shared/buttons/login-button";
import {Input} from "@/components/ui";
import {Link} from "react-router-dom";


interface Props{
    className? : string;
}

export const Header: React.FC<Props> = ({className}) =>{
    return (
        <header className="flex justify-between items-center w-full px-5 gap-20 pt-5">
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

            <Input className={'rounded-2xl w-[40%]'} placeholder={'   Найти...'}/>

            <div className="flex flex-row gap-8">
                <LoginButton></LoginButton>
                <Link to={'/pages/account-page'}>
                    <Button className={'bg-gray-400 text-black'}> Мой аккаунт </Button>
                </Link>
            </div>


        </header>
    )

}

