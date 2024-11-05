import React from 'react';
import {Switch} from "@/components/ui";
import {cn} from "@/lib/utils";


interface Props{
    className?: string;
    value: number;
    text: string;
    defaultChecked?: boolean;
}

export const BetterSwitch : React.FC<Props> = ({className, value, text, defaultChecked=false}) =>{
    return (
        <div className={cn('flex justify-start ', className)}>
            <Switch value={value}  defaultChecked={defaultChecked   }></Switch>
            <span className={'ml-8'}> {text} </span>
        </div>
    )
}