import { EyeIcon, ShareIcon, HeartIcon as Unliked } from "@heroicons/react/24/outline";
import { HeartIcon as Liked } from "@heroicons/react/24/solid";
import { useState } from "react";

import mock from "@public/mock/house.jpg";
import Image from "next/image";
import Link from "next/link";
import { PropertySchema } from "@schemas/propertySchema";

export default function Card({ data }: { data: PropertySchema }) {
    const [like, setLike] = useState(false);

    return (
        <div className="relative w-full h-full flex items-center justify-center rounded-lg bg-slate-950/20 cursor-grab active:cursor-grabbing overflow-hidden">
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button 
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900/30 text-white cursor-pointer hover:bg-stone-900/50"
                >
                    <ShareIcon className="size-4 pr-0.8"/>
                </button>
                <button 
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900/30 text-white cursor-pointer hover:bg-stone-900/50"
                    onClick={() => setLike(prev => !prev)}
                >
                    {like
                        ? <Liked className="size-6"/>
                        : <Unliked className="size-6"/>                    
                    }
                </button>
            </div>
            <Image
                className="absolute top-0 left-0 z-10 w-full h-full object-cover" 
                src={mock} 
                alt="casa" 
            />
            <div className="absolute bottom-0 left-0 z-20 w-full h-auto p-4 bg-stone-100/50 backdrop-blur-xs">
                <div className="mb-3">
                    <p className="text-stone-950 text-sm">{ data.info.description }</p>
                </div>
                <Link 
                    href={`/imovel/${data.code}`} 
                    className="flex items-center justify-center gap-1 w-40 bg-stone-100 rounded-md py-2 px-4 uppercase text-sm font-bold hover:scale-105 duration-300"
                > 
                    <EyeIcon className="size-5" />Ver imóvel 
                </Link>
            </div>
        </div>
    )
}