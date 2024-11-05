import React from 'react';
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

interface Props{

    name: string;
    imageUrl?: string;
    className?: string;
}

export const Card: React.FC<Props> = ({className, name, imageUrl}) => {
    return (
        <div className={className}>

                <div className={'flex justify-center p-6 bg-secondary rounded-lg h-[260px]'}>
                    <img className={'w-[215px] h-[215px]'} src={imageUrl} alt={name}/>
                </div>

                <div className={'sticky flex-auto '}>

                </div>

                <Title text={name} size={'sm'} className={'mb-1 mt-3 font-bold'}/>

                <p className={'text-sm text-gray-400'}>
                    wqerqwep[lrqp[wle
                </p>

                <div className={'flex items-center justify-center mt-4'}>
                    <Button variant={'secondary'} className={'text-base font-bold'}>
                        <Plus className={'mr-1'} size={20}/>
                        Добавить
                    </Button>
                </div>

        </div>
    )
}