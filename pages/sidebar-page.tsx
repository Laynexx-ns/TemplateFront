import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {Button} from "@/components/ui";
import React from "react";
import {Header} from "@/components/shared";

export function SidebarPage() {
    return (
        <div className={'text-white'}>
            <SidebarProvider
                style={
                    {
                        "background-color": "black",
                        "--sidebar-width": "19rem",
                    } as React.CSSProperties
                }
            >
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Header/>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                        </div>
                        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>

    )
}
