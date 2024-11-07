import * as React from "react"
import {CalendarCheck2, GalleryVerticalEnd, LogIn} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {Button} from "@/components/ui";
import {cn} from "@/lib/utils";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Back to home",
            url: "/",
            icon: null,
        },
        {
            title: "Getting Started",
            url: "#",
            icon: null,
            items: [
                {
                    title: "Installation",
                    url: "#",
                    icon: <CalendarCheck2 size={'18'} />
                },
                {
                    title: "Project Structure",
                    url: "#",
                    icon: <GalleryVerticalEnd size={'18'}/>,
                },
            ],
        },
        {
            title: "Docs",
            url: "/",
            icon: null,
        }
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant={'floating'} className={'text-white bg-black'} {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' className={''} asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-sidebar-primary-foreground">
                                    <GalleryVerticalEnd className="size-5" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-semibold">Documentation</span>
                                    <span className="">v1.0.0</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu className="gap-2">
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url} className={''}>
                                        {item.icon}
                                        {item.title}
                                    </a>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                                        {item.items.map((item) => (
                                            <SidebarMenuSubItem key={item.title}>
                                                <SidebarMenuSubButton asChild>
                                                    <Button variant={'link'} className={'text-left justify-start text-white'}> <span className={'text-gray-100/50'}>{item.icon}</span> {item.title} </Button>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
