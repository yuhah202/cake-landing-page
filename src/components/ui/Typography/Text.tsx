import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface {
  color: TypoColorType;
  children: ReactNode;
}

function Text({ children, color = TypoColorType.Primary }: PropsInterface) {
  return (
    <p
      className={cn(
        COLORS[color],
        "text-[0.875rem]/[1.6] sm:text-[0.9375rem]/[1.7] md:text-[1rem]/[1.8]"
      )}
    >
      {children}
    </p>
  );
}

export default Text;
