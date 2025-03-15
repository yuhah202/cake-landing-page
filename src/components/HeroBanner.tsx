import Image from "next/image";
import React from "react";
import Link from "next/link";

import { TypoColorType } from "@/helpers/models";
import { cn } from "@/lib/utils";

import { Text, TypographyH1 } from "./ui/Typography";
import { buttonVariants } from "./ui/button";

function HeroBanner() {
  return (
    <section id="hero" className="relative z-[5] w-full aspect-[2/1]">
      <Image src="/images/hero-background.jpg" fill alt="Hero" />
      <div className="size-full relative z-[10] container">
        <div className="absolute top-1/2 -translate-y-1/2">
          <TypographyH1 className="text-primary-foreground">
            <span>Lorem, ipsum.</span>
            <br />
            <span>Lorem, ipsum.</span>
          </TypographyH1>

          <Link
            href="https://www.facebook.com/BioTeabreak"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-[80px] py-3 px-6"
            )}
          >
            <Text color={TypoColorType.Neutral} size="medium">
              Liên hệ với chúng tôi
            </Text>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
