'use client';

import React from 'react';
import {Search} from "lucide-react";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({className}) =>{
    const [focuded, setFocuded] = React.useState(false);

    return (
        <>

            {focuded &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30" onClick={()=>setFocuded(false)}/>
                    }

                    <div className={cn(className, 'flex rounded-2xl flex-1 justify-between relative h-11 z-50')}>
                        <Search className={'absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400'}/>
                        <input className={'rounded-2xl outline-none w-full bg-gray-100 pl-11'}
                               type={'text'}
                               placeholder={'Найти...'}
                               onFocus={()=> setFocuded(true)}

                        />
                    </div>
                </>
                )
            }
