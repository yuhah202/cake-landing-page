import React from "react";
import Image from "next/image";

import SectionWrap from "./common/SectionWrap";
import { Text, TypographyH3 } from "./ui/Typography";

function IntroduceSection() {
  return (
    <SectionWrap id="gioi-thieu" className="relative bg-secondary">
      <div className="container flex gap-x-20">
        <div className="w-2/3 space-y-12">
          <TypographyH3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </TypographyH3>

          <div className="space-y-4">
            <Text size="large" className="space-y-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ullam labore commodi tenetur facere non nesciunt iste
              ratione? Velit aspernatur consequuntur vel suscipit pariatur
              nesciunt saepe numquam distinctio itaque incidunt.
            </Text>

            <Text size="large" className="space-y-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ullam labore commodi tenetur facere non nesciunt iste
              ratione? Velit aspernatur consequuntur vel suscipit pariatur
              nesciunt saepe numquam distinctio itaque incidunt.
            </Text>
          </div>
        </div>

        <div className="relative w-1/3 ">
          <Image src="/images/hero-background.jpg" fill alt="" />
        </div>
      </div>
    </SectionWrap>
  );
}

export default IntroduceSection;
