import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TypoColorType;
  children: ReactNode;
}

function TypographyH3({
  children,
  color = TypoColorType.Primary,
  className = "",
  ...rest
}: PropsInterface) {
  return (
    <h3
      {...rest}
      className={cn(
        COLORS[color],
        "text-[2.5rem] max-lg:text-[2.25rem] max-sm:text-[1.75rem] max-md:text-[2rem] font-bold leading-[1.2]",
        className
      )}
    >
      {children}
    </h3>
  );
}

export default TypographyH3;
