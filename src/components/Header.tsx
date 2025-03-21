import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SOCIALS } from "@/helpers/constants";
import { TypoColorType } from "@/helpers/models";

import { buttonVariants } from "./ui/button";
import { TypographyH3 } from "./ui/Typography";
import { cn } from "@/lib/utils";

function Header() {
  return (
    <header className="pt-[1.875rem] bg-background">
      <div className="container flex justify-between items-end pb-3">
        <ul className="flex items-center" role="list">
          {SOCIALS.map((item) => (
            <li key={item.id} role="listItem">
              <Link href={item.href} className="p-3 block">
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.title}
                  title={item.title}
                />
              </Link>
            </li>
          ))}
        </ul>

        <TypographyH3 color={TypoColorType.Primary}>BIO TEABREAK</TypographyH3>

        <Link
          href="tel:+84905123123"
          title="+84-905-123-123"
          className={cn(
            buttonVariants({ variant: "default" }),
            "inline-flex px-4 py-2"
          )}
        >
          Gọi cho chúng tôi
        </Link>
      </div>
    </header>
  );
}

export default Header;
