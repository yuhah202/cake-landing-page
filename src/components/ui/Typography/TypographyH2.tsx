import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TypoColorType;
  children: ReactNode;
}

function TypographyH2({
  children,
  color = TypoColorType.Primary,
  className = "",
  ...rest
}: PropsInterface) {
  return (
    <h2
      {...rest}
      className={cn(
        COLORS[color],
        "text-[3rem] max-lg:text-[2.75rem] max-sm:text-[2.125rem] max-md:text-[2.375rem] font-bold leading-[1.2]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;
