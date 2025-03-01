import Image from "next/image";
import React from "react";
import { Text, TypographyH1 } from "./ui/Typography";
import { Button } from "./ui/button";
import { TypoColorType } from "@/helpers/models";

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

          <Button className="mt-[80px]">
            <Text color={TypoColorType.Neutral} size="medium">
              Liên hệ với chúng tôi
            </Text>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
