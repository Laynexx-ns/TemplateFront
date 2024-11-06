import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import React, {PropsWithChildren} from "react";
import {cn} from "@/lib/utils";

interface Props{
    className?: string;
}

export const SidePanel  : React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger className={cn('w-[200px]' + className)} />
                {children}
            </main>
        </SidebarProvider>
    )
}
