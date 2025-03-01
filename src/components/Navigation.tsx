"use client";

import React from "react";
import Link from "next/link";

import { NAVIGATES } from "@/helpers/constants";
import { TypoColorType } from "@/helpers/models";

import { Text } from "./ui/Typography";
import { cn } from "@/lib/utils";

const BACKGROUND_COLORS = ["bg-[#DCCDBE]", "bg-[#C8B9A5]", "bg-[#D7C8B4]"];

function Navigation() {
  const [backgroundColor, setBackgroundColor] = React.useState(0);

  const handleChange = () => {
    setBackgroundColor((prev) => {
      if (backgroundColor === 2) {
        return 0;
      }

      return prev + 1;
    });
  };
  /*
  TODO: Ở đây có 3 màu chưa biết sử dụng màu nào cho hợp lí
  (#DCCDBE): Nhạt hơn một chút, gần màu gốc hơn.
  (#C8B9A5): Đậm hơn một chút, tăng độ tương phản nhẹ.
  (#D7C8B4): Trung gian, cân bằng giữa hai màu trên.
  */

  return (
    <nav
      className={cn(
        "sticky top-0 z-[100] w-full",
        BACKGROUND_COLORS[backgroundColor]
      )}
      aria-label="Main navigation"
    >
      <ul className="flex justify-center items-center gap-x-4" role="listitem">
        {NAVIGATES.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={handleChange}
              className="block px-4 py-6 relative group"
            >
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
