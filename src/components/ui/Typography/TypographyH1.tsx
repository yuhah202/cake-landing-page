import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface {
  color: TypoColorType;
  children: ReactNode;
}

function TypographyH1({
  children,
  color = TypoColorType.Primary,
}: PropsInterface) {
  return (
    <h1
      className={cn(
        COLORS[color],
        "text-[1.75rem]/[1.3] font-bold sm:text-[2rem]/[1.3] md:text-[2.5rem]/[1.3]"
      )}
    >
      {children}
    </h1>
  );
}

export default TypographyH1;
