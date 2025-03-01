import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface {
  color: TypoColorType;
  children: ReactNode;
}

function TypographyH5({
  children,
  color = TypoColorType.Primary,
}: PropsInterface) {
  return (
    <h5
      className={cn(
        COLORS[color],
        "text-[0.875rem]/[1.6] font-bold sm:text-[0.9375rem]/[1.6] md:text-[1rem]/[1.6]"
      )}
    >
      {children}
    </h5>
  );
}

export default TypographyH5;
