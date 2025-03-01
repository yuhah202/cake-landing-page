import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TypoColorType;
  children: ReactNode;
}

function TypographyH1({
  children,
  color = TypoColorType.Primary,
  className = "",
  ...rest
}: PropsInterface) {
  return (
    <h1
      {...rest}
      className={cn(
        COLORS[color],
        "text-[3.75rem] max-lg:text-[3.375rem] max-sm:text-[2.625rem] max-md:text-[3rem] font-bold leading-[1.2]",
        className
      )}
    >
      {children}
    </h1>
  );
}

export default TypographyH1;
