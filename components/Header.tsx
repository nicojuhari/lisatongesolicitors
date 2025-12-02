'use client';

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services = [
    {
        title: "Mortgages",
        href: "#mortgages",
        description: "All mortgage-related legal services."
    },
    {
        title: "Wills and Probate",
        href: "#wills",
        description: "Wills, probate, and power of attorney."
    },
    {
        title: "Conveyancing",
        href: "#conveyancing",
        description: "Sales, purchases, property transfers."
    },
];

function ListItem({ title, children, href, ...props } : { title: string; children: React.ReactNode; href: string; } & React.LiHTMLAttributes<HTMLLIElement>) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href} className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-900">
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

const HeaderComp = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <div className="bg-white border-b border-gray-200 shadow-xs">
            <header className="container flex items-center justify-between py-4 h-14">
                <Link href="/" className="flex items-center space-x-2">
                <Image src={"/solicitor-lisa-tonge-logo.png"} alt="Lisa Tonge Solicitors Logo" width={160} height={40} />
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 justify-end">
                    <NavigationMenu>
                        <NavigationMenuList className="flex-wrap">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                                        {services.map((service) => (
                                            <ListItem key={service.title} title={service.title} href={service.href}>
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/about" title="About">About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/contacts" title="Contacts">Contacts</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="tel:+441612416118" title="Call us" className="font-bold text-pink-900 px-4 py-2">0161 241 6118</Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    {!mobileOpen ? (
                        <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
                            <ListIcon size={32} />
                        </button>
                    ) : (
                        <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                            <XIcon size={32} />
                        </button>
                    )}
                </div>
            </header>
            {/* Mobile Navigation Menu */}
            {mobileOpen && (
                <nav className="md:hidden absolute w-full bg-white z-50 p-6 shadow-lg">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <details>
                                <summary className="cursor-pointer py-2">Services</summary>
                                <ul className="pl-4 mt-2 flex flex-col gap-2">
                                    {services.map((service) => (
                                        <li key={service.title}>
                                            <a href={service.href} className="block text-gray-700 py-1">
                                                <div className="font-medium">{service.title}</div>
                                                <div className="text-sm text-gray-500">{service.description}</div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/about" title="About" className="py-2 block">About</Link>
                        </li>
                        <li>
                            <Link href="/contacts" title="Contacts" className="py-2 block">Contacts</Link>
                        </li>
                        <li>
                            <Link href="tel:+441612416118" title="Call us" className="font-bold text-pink-900 py-2 block">0161 241 6118</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HeaderComp;