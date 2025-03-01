import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface {
  color: TypoColorType;
  children: ReactNode;
}

function TypographyH4({
  children,
  color = TypoColorType.Primary,
}: PropsInterface) {
  return (
    <h4
      className={cn(
        COLORS[color],
        "text-[1rem]/[1.6] font-bold sm:text-[1.125rem]/[1.6] md:text-[1.25rem]/[1.6]"
      )}
    >
      {children}
    </h4>
  );
}

export default TypographyH4;
