"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import SectionWrap from "@/components/common/SectionWrap";
import { Text, TypographyH2, TypographyH5 } from "../Typography";
import { Separator } from "../separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";

function Events() {
  return (
    <SectionWrap id="su-kien">
      <div className="container w-full flex flex-col items-center gap-4">
        <TypographyH2 className="w-full max-w-[600px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </TypographyH2>

        <Separator className="border-2 max-w-[200px] rounded-full mb-10" />

        <Image
          src="/images/hero-background.jpg"
          width={1280}
          height={920}
          className="w-full aspect-[2/1]"
          alt="Event Item"
        />

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3 pl-8">
                <div className="relative flex flex-col gap-y-5 w-full">
                  <Image
                    src="/images/hero-background.jpg"
                    width={600}
                    height={300}
                    className="w-full aspect-[2/1]"
                    alt="Event Item"
                  />

                  <div className="space-y-3">
                    <TypographyH5>Lorem ipsum dolor sit amet.</TypographyH5>

                    <Text size="medium">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Reiciendis, odio sint praesentium consequuntur repellat
                      voluptates?
                    </Text>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </SectionWrap>
  );
}

export default Events;
