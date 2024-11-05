import React, {PropsWithChildren} from 'react';
import { cn } from '@/lib/utils'


interface Props{
    className? : string;

}

export const Container: React.FC<PropsWithChildren<Props>> = ({children, className}) => {
    return (
        <div className={cn('flex items-center w-full', className)}>
            {children}
        </div>
    )
}