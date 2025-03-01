import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SOCIALS } from "@/helpers/constants";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/Typography";
import { TypoColorType } from "@/helpers/models";

function Header() {
  return (
    <header className="container ">
      <div className="pt-[1.875rem]">
        <div className="flex justify-between items-center">
          <ul className="flex items-center">
            {SOCIALS.map((item) => (
              <li key={item.id}>
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

          <TypographyH1 color={TypoColorType.Primary}>
            BIO TEABREAK
          </TypographyH1>

          <Button>Gọi cho chúng tôi: 0123456789</Button>
        </div>
        <div className=""></div>
      </div>
    </header>
  );
}

export default Header;
