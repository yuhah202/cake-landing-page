import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TypoColorType;
  children: ReactNode;
}

function TypographyH5({
  children,
  color = TypoColorType.Primary,
  className = "",
  ...rest
}: PropsInterface) {
  return (
    <h5
      {...rest}
      className={cn(
        COLORS[color],
        "text-[1.5rem] max-lg:text-[1.375rem] max-sm:text-[1.25rem] max-md:text-[1.125rem] font-medium leading-[1.2]",
        className
      )}
    >
      {children}
    </h5>
  );
}

export default TypographyH5;
