import React from "react";
import Image from "next/image";

import SectionWrap from "./common/SectionWrap";
import { Text, TypographyH2, TypographyH3 } from "./ui/Typography";
import { Separator } from "./ui/separator";

function Menu() {
  return (
    <SectionWrap id="menu" className="bg-secondary">
      <div className="container w-full flex flex-col items-center gap-4">
        <TypographyH2 className="w-full max-w-[600px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </TypographyH2>

        <Separator className="border-2 max-w-[200px] rounded-full mb-10" />

        <div className="w-full flex gap-x-20">
          <div className="w-2/3 space-y-12">
            <TypographyH3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </TypographyH3>

            <div className="space-y-4">
              <Text size="large" className="space-y-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ullam labore commodi tenetur facere non nesciunt
                iste ratione? Velit aspernatur consequuntur vel suscipit
                pariatur nesciunt saepe numquam distinctio itaque incidunt.
              </Text>

              <Text size="large" className="space-y-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ullam labore commodi tenetur facere non nesciunt
                iste ratione? Velit aspernatur consequuntur vel suscipit
                pariatur nesciunt saepe numquam distinctio itaque incidunt.
              </Text>
            </div>
          </div>

          <div className="relative w-1/3 ">
            <Image src="/images/hero-background.jpg" fill alt="" />
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}

export default Menu;
