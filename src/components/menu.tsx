"use client";
import Link from "next/link";
import { useState } from "react";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { Bars3BottomRightIcon, GlobeAmericasIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Container from "@components/container";

interface MyLinkProps {
    to: string
    label: string
    icon?: React.ReactNode
}

function MyLink({ to, label, icon }: MyLinkProps) {
    return (
        <Link 
            className="text-xs 2xl:text-sm font-bold uppercase flex items-center gap-1 w-full h-auto py-2 text-rose-700 border-b border-rose-700 md:border-0 md:p-0 hover:underline"
            href={to}
        > { icon } { label } </Link>
    )
}

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenu() {
        setIsOpen(prev => !prev);
    }

    return (
        <div className="flex items-center w-full h-20 border-b border-rose-700/30">
            <Container className="flex items-center justify-between">
                <Link className="flex items-center gap-1 text-rose-700" href="/"> 
                    <HomeModernIcon className="size-6"/> 
                    <p className="text-xl font-bold pt-2">Brand</p> 
                </Link>
                
                <button
                    onClick={handleMenu} 
                    className="text-rose-700 md:hidden"
                    >
                    <Bars3BottomRightIcon className="size-6" />
                </button>

                <div className={`absolute top-0 left-0 ${isOpen ? "z-50 bg-stone-700/70" : "-z-50 bg-none"} w-full h-screen backdrop-blur-xs duration-500 ease-out md:hidden`}>
                    <div className={`absolute top-0 ${isOpen ? "left-0 delay-300" : "-left-full delay-75"} w-10/12 h-full bg-white duration-500 ease-out`}>
                        <div className="relative w-full h-14 flex items-center justify-center border-b border-rose-700">
                            <Link className="flex items-center gap-1 text-rose-700 px-4" href="/"> 
                                <HomeModernIcon className="size-6"/> 
                                <p className="text-xl font-bold pt-2">Brand</p> 
                            </Link>
                            <button 
                                onClick={handleMenu} 
                                className="absolute top-0 right-0 flex items-center justify-center w-14 h-14 text-rose-700"
                                >
                                <XMarkIcon className="size-5"/> 
                            </button>
                        </div>
                        <div className="flex flex-col px-4">
                            <MyLink 
                                to="/opt" 
                                label="Option" 
                                icon={<GlobeAmericasIcon className="size-4"/>}
                                />
                            <MyLink 
                                to="/opt" 
                                label="Option" 
                                icon={<GlobeAmericasIcon className="size-4"/>}
                                />
                            <MyLink 
                                to="/opt" 
                                label="Option" 
                                icon={<GlobeAmericasIcon className="size-4"/>}
                                />
                            <MyLink 
                                to="/opt" 
                                label="Option" 
                                icon={<GlobeAmericasIcon className="size-4"/>}
                                />
                            <MyLink 
                                to="/opt" 
                                label="Option" 
                                icon={<GlobeAmericasIcon className="size-4"/>}
                                />
                            <MyLink 
                                to="/opt" 
                                label="Option" 
                                icon={<GlobeAmericasIcon className="size-4"/>}
                                />
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex gap-4">
                    <MyLink 
                        to="/opt" 
                        label="Option"
                        />
                    <MyLink 
                        to="/opt" 
                        label="Option"
                        />
                    <MyLink 
                        to="/opt" 
                        label="Option"
                        />
                    <MyLink 
                        to="/opt" 
                        label="Option"
                        />
                    <MyLink 
                        to="/opt" 
                        label="Option"
                        />
                    <MyLink 
                        to="/opt" 
                        label="Option"
                        />
                </div>
            </Container>
        </div>
    )
}