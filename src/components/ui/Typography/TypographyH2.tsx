import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface {
  color: TypoColorType;
  children: ReactNode;
}

function TypographyH2({
  children,
  color = TypoColorType.Primary,
}: PropsInterface) {
  return (
    <h2
      className={cn(
        COLORS[color],
        "text-[1.5rem]/[1.4] font-bold sm:text-[1.75rem]/[1.4] md:text-[2rem]/[1.4]"
      )}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;
