import React from 'react';
import {cn} from "@/lib/utils";

import {Container, SearchInput} from "@/components/shared";
import {Button} from "@/components/ui/button";
import {LoginButton} from "@/components/shared/buttons/login-button";


interface Props{
    className? : string;
}

export const Header: React.FC<Props> = ({className}) =>{
    return (
        <header className={cn(className, 'mt-0 pt-0 mx-20 h-25 justify-between items-center')}>
            <Container className={'flex items-center justify-between py-8 gap-10'}>

                {/*логотипчик*/}
                <div className={'flex items-center gap-4'}>
                    <img width={164} height={208} src={'./Sort.svg'} alt={'logo'}/>
                </div>


                {/*инпут*/}
                <div className={' mx-auto flex-1 -ml-16'}>
                    <SearchInput className={'mx-auto text-black w-[80%]'}/>
                </div>


                {/*кнопочки*/}
                <div className={'flex items-center gap-4'}>
                    <LoginButton></LoginButton>
                    <Button className={'group relative bg-white font-bold text-black'}> Sign up </Button>
                </div>
            </Container>
        </header>
    )

}

