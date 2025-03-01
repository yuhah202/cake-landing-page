import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PropsInterface extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

function SectionWrap({ children, className = "", ...rest }: PropsInterface) {
  return (
    <section {...rest} className={cn("w-full py-[5rem]", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export default SectionWrap;
