import React from 'react';
import {Button, Input, Slider, Switch} from "@/components/ui"
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {BetterSwitch} from "@/components/shared/betterSwitch";

interface Props {
    className?: string;
}

export const SideBar : React.FC<Props> = ({className }) => {

    return(
        <div className={cn('flex flex-col  gap-2', className)}>
            <Title text={"Че-то"} size={'sm'} className={'mb-5 font-custom'}/>
            <div className={'flex flex-col gap-4 pb-5'}>
                {/*верхние чекбоксы*/}
                <BetterSwitch value={3} text={'1 переключалка'} defaultChecked={true}/>
                <BetterSwitch value={3} text={'2 переключалка'} defaultChecked={true}/>
            </div>

            {/*разделитель*/}
            <div className={'border-y border-y-neutral-50 opacity-15'}/>

            {/* фильтр цены*/}
            <div className={'flex-col gap-4 pb-10 pt-5'}>
                <span> Туда-сюда </span>
                <Slider defaultValue={[1, 100]} />
            </div>

            <div className={'flex flex-col '}>

                {/*переключатели*/}
                <div className={'flex flex-col gap-4'}>
                    <BetterSwitch value={3} text={'3 переключалка'} defaultChecked={true}/>
                    <BetterSwitch value={3} text={'4 переключалка'}/>
                    <BetterSwitch value={3} text={'5 переключалка'}/>
                </div>

                {/*кнопочка*/}
                <Button className={'mt-6'}> Применить </Button>
            </div>


        </div>
    );
}