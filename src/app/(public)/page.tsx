"use client"
import "swiper/css";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@components/container";
import Card from "@components/card";
import { MockData } from "../../utils/propertyMock";
import { PropertySchema } from "@schemas/propertySchema";

export default function Page() {
  return (
    <div className="h-96 bg-rose-700 xl:h-[500px] 2xl:h-[600px] overflow-hidden">
      <Container className="grid grid-cols-12 grid-rows-12 md:gap-x-8 py-10 h-full">
        <div className="flex flex-col justify-center col-span-12 row-span-11 md:col-span-6">
          <h1 className="text-5xl text-white mb-4 2xl:text-8xl"> Hello World </h1>
          <p className="text-white text-sm text-justify 2xl:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus pariatur excepturi inventore aut doloribus ad 
            dolor repudiandae sequi necessitatibus aperiam officiis, rerum minus repellat. Impedit natus minima corrupti! 
            Maxime, provident!
          </p>
        </div>
        <div className="hidden md:block col-span-6 row-span-11 xl:pl-14">
          <Swiper
            className="w-full h-full"
            spaceBetween={32}
            slidesPerView={1}
          >
            {MockData.map((data: PropertySchema, index: number) => {
              return (
                <SwiperSlide key={index} className="!flex !items-center !justify-center">
                  <Card data={data}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <button className="col-span-12 row-span-1 flex items-center justify-center w-full text-white cursor-pointer hover:scale-110 duration-500">
          <ArrowDownOnSquareStackIcon className="size-8" />
        </button>
      </Container>
    </div>
  );
}
