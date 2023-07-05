'use client';

import * as React from "react"
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils"
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
{
title: "Alert Dialog",
href: "/docs/primitives/alert-dialog",
description:
    "A modal dialog that interrupts the user with important content and expects a response.",
},
{
title: "Hover Card",
href: "/docs/primitives/hover-card",
description:
    "For sighted users to preview content available behind a link.",
},
{
title: "Progress",
href: "/docs/primitives/progress",
description:
    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
},
{
title: "Scroll-area",
href: "/docs/primitives/scroll-area",
description: "Visually or semantically separates content.",
},
{
title: "Tabs",
href: "/docs/primitives/tabs",
description:
    "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
},
{
title: "Tooltip",
href: "/docs/primitives/tooltip",
description:
    "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
},
]

export function NavigationMenuDemo() {
return (
<React.Fragment>
    <nav className="flex justify-center w-full mx-auto py-4 px-10 z-10 bg-transparent absolute shadow-sm">
        <div className="w-[92%] flex items-center justify-between">
            <Link href="/">
                <Image src="/logo3.png" width={140} height={60} alt="Singly" />
            </Link>
            <div className="flex items-center">
                <Button className="mx-[16px] bg-[#101010] hover:bg-[#101010]">
                <Link href="/authentication/login">Log in</Link>
                </Button>
                <Button className="bg-[#5E17EB] hover:bg-[#5E17EB]" asChild>
                <Link href="/authentication/signup">Sign up free</Link>
                </Button>
            </div>
        </div>
    </nav>
</React.Fragment>

)
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
