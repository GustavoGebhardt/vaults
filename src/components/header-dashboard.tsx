"use client"

import LogOutButton from "@/components/logout-button";
import ThemeButton from "@/components/theme-button";
import { useState } from "react";
import { BellRing, CalendarDays, Check, KeyRound, Vault, Lock  } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LogoImage from "./logo-image";
  
interface HeaderDashboardProps{
    userName: string | undefined
}

export default function HeaderDashboard({ userName }: HeaderDashboardProps){
    const [notifications, setNotifications] = useState(false)

    const notification = [
        {
            title: "Your call has been confirmed.",
            description: "1 hour ago",
        },
        {
            title: "You have a new message!",
            description: "1 hour ago",
        },
        {
            title: "Your subscription is expiring soon!",
            description: "2 hours ago",
        },
    ]

    const createPassword: { title: string; href: string; description: string }[] = [
        {
          title: "Alert Dialog",
          href: "/createPassword",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/createPassword",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/createPassword",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Scroll-area",
          href: "/createPassword",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Tabs",
          href: "/createPassword",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
          title: "Tooltip",
          href: "/createPassword",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ]

    function changeNotifications(){
        setNotifications(!notifications)
    }

    const ListItem = React.forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    })
    ListItem.displayName = "ListItem"

    return(
        <>
            <div className="w-full flex gap-6 justify-around items-center p-6">
                <div className="flex gap-8 items-center">
                    <LogoImage width={110} height={110} />
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href={"/dashboard"} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Dashboard
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Criar Senha</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {createPassword.map((component) => (
                                            <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            >
                                            {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Cofre</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/vault"
                                        >
                                            <Lock className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium"> 
                                            Cofre
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                            </p>
                                        </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex items-center">
                    <p className="font-medium text-base pr-1">Bem vindo,</p>
                    <HoverCard>
                        <HoverCardTrigger className="font-medium text-base">{userName}</HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/GustavoGebhardt.png" />
                                    <AvatarFallback>GG</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@nextjs</h4>
                                    <p className="text-sm">
                                    The React Framework – created and maintained by @vercel.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                                            Joined December 2021
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <p className="font-medium text-base">!</p>
                </div>
                <div className="flex gap-6 items-center">
                    <Input className="w-72" placeholder="Quick search..."/>
                    <div className="flex gap-2">
                        <ThemeButton />
                        <Button variant="outline" size="icon" onClick={changeNotifications}><BellRing className="w-5"/></Button>
                        <LogOutButton />
                    </div>
                </div>
            </div>
            <Sheet open={notifications} onOpenChange={changeNotifications}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold">Notifications</SheetTitle>
                        <SheetDescription>
                            You have {notification.length} unread messages.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="pt-8 pb-8">
                        {notification.map((notification, index) => (
                            <div
                                key={index}
                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className="w-full">
                        <Check className="mr-2 h-4 w-4" /> Mark all as read
                    </Button>
                </SheetContent>
            </Sheet>
        </>
    );
}