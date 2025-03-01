import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface {
  color: TypoColorType;
  children: ReactNode;
}

function TypographyH3({
  children,
  color = TypoColorType.Primary,
}: PropsInterface) {
  return (
    <h3
      className={cn(
        COLORS[color],
        "text-[1.25rem]/[1.5] font-bold sm:text-[1.5rem]/[1.5] md:text-[1.75rem]/[1.5]"
      )}
    >
      {children}
    </h3>
  );
}

export default TypographyH3;
