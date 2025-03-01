import React, { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { TypoColorType } from "@/helpers/models";
import { COLORS } from "@/helpers/settings";

interface PropsInterface extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
  color?: TypoColorType;
  children: ReactNode;
  size?: VariantProps<typeof typoVariant>["size"];
}

const typoVariant = cva("leading-[1.2]", {
  variants: {
    size: {
      large: "text-[1.25rem] max-sm:text-[1rem] max-md:text-[1.125rem]",
      medium: "text-[1.125rem] max-sm:text-[0.875rem] max-md:text-[1rem]",
      small: "text-[0.875rem] max-sm:text-[0.75rem] max-md:text-[0.625rem]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

function Text({
  children,
  color = TypoColorType.Primary,
  className = "",
  size = "medium",
  asChild = false,
  ...rest
}: PropsInterface) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="p"
      {...rest}
      className={cn(
        typoVariant({ size }),
        COLORS[color],
        "leading-[1.2]",
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Text;
