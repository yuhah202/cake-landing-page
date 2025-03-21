import React from "react";
import SectionWrap from "../common/SectionWrap";
import {
  Text,
  TypographyH2,
  TypographyH3,
  TypographyH5,
} from "../ui/Typography";
import { Separator } from "../ui/separator";
import { SERVICE_LIST } from "@/helpers/constants";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function ActivitiesSection() {
  return (
    <SectionWrap id="dich-vu">
      <div className="container w-full flex flex-col items-center gap-4">
        <TypographyH2 className="w-full max-w-[600px] text-center">
          Dịch vụ
        </TypographyH2>

        <Separator className="border-2 max-w-[200px] rounded-full mb-10" />

        <div className="w-full grid grid-cols-3 gap-5">
          {SERVICE_LIST.map((item) => (
            <article
              key={item.id}
              className="aspect-[3] relative rounded-3xl overflow-hidden group [&_*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out [&:first-child]:col-span-3 col-span-1"
            >
              <Image
                src={item.background}
                fill
                alt={item.label}
                className="object-cover group-hover:scale-105"
              />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {item.id < 2 ? (
                  <TypographyH3 className={cn("text-center mb-6")}>
                    {item.label}
                  </TypographyH3>
                ) : (
                  <TypographyH5 className="text-center font-bold mb-3">
                    {item.label}
                  </TypographyH5>
                )}

                {item.id < 2 ? (
                  <TypographyH5
                    className={cn(
                      "text-center font-medium mb-6 max-h-[0] group-hover:max-h-[30px] overflow-hidden transition-all duration-300 ease-in-out"
                    )}
                  >
                    {item.description}
                  </TypographyH5>
                ) : (
                  <Text className="text-center max-h-[0] group-hover:max-h-[45px] mb-3 overflow-hidden transition-all duration-300 ease-in-out">
                    {item.description}
                  </Text>
                )}

                <Link
                  href="##"
                  className={cn(
                    "flex gap-x-2 justify-center items-center bg-primary text-center w-full hover:text-primary border-primary border-solid border rounded-4xl   hover:bg-transparent text-white transition-all duration-300 ease-in-out group/link",
                    item.id < 2 ? "px-4 py-2" : "px-3 py-1"
                  )}
                >
                  Liên hệ
                  <ArrowRight className="size-6 text-primary max-w-[0]  group-hover/link:max-w-6 transition-all duration-300 ease-in-out" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}

export default ActivitiesSection;
