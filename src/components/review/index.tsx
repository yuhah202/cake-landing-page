"use client";

import React from "react";
import SectionWrap from "../common/SectionWrap";
import { TypographyH2 } from "../ui/Typography";
import ReviewCard from "./ReviewCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function ReviewSection() {
  return (
    <SectionWrap className="bg-secondary">
      <div className="container w-full flex flex-col items-center gap-10">
        <TypographyH2 className="w-full max-w-[600px] text-center">
          Các đánh giá & Đối tác
        </TypographyH2>

        <div className="w-full grid grid-cols-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-6"
        >
          <CarouselContent className="-ml-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/6 pl-8">
                <div className="relative flex flex-col gap-y-5 w-full h-24">
                  <Image
                    src="/images/hero-background.jpg"
                    fill
                    alt="Event Item"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SectionWrap>
  );
}

export default ReviewSection;
