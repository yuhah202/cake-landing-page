import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TypoColorType;
  children: ReactNode;
}

function TypographyH4({
  children,
  color = TypoColorType.Primary,
  className = "",
  ...rest
}: PropsInterface) {
  return (
    <h4
      {...rest}
      className={cn(
        COLORS[color],
        "text-[2rem] max-lg:text-[1.75rem] max-sm:text-[1.5rem] max-md:text-[1.625rem] font-medium leading-[1.2]",
        className
      )}
    >
      {children}
    </h4>
  );
}

export default TypographyH4;
