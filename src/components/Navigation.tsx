import React from "react";
import Link from "next/link";

import { NAVIGATES } from "@/helpers/constants";
import { TypoColorType } from "@/helpers/models";

import { Text } from "./ui/Typography";

function Navigation() {
  return (
    <nav
      className="sticky top-0 z-[100] w-full bg-foreground"
      aria-label="Main navigation"
    >
      <ul className="flex justify-center items-center gap-x-4" role="listitem">
        {NAVIGATES.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className="block px-4 py-6 relative group">
              <Text
                color={TypoColorType.Primary}
                size="medium"
                className="group-hover:text-[#8C5F41] relative transition-colors duration-300 ease-in-out [&:after]:content-[''] [&:after]:-bottom-1 [&:after]:left-0 [&:after]:absolute [&:after]:h-[0.125rem] [&:after]:bg-[#8C5F41] [&:after]:w-0 hover:[&:after]:w-full  [&:after]:transition-all [&:after]:duration-500 [&:after]:ease-out"
              >
                {item.text}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
