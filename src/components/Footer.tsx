import React from "react";
import { Text, TypographyH3 } from "./ui/Typography";
import Image from "next/image";
import { STORE_INFORMATION } from "@/helpers/constants";
import GoogleMapComponent from "./GoogleMap";

function Footer() {
  return (
    <footer className="w-full py-[5rem]">
      <div className="container w-full grid grid-cols-3 gap-x-6">
        <div className="col-span-1 flex flex-col gap-y-4">
          <div className="relative w-full max-w-[40%] aspect-square">
            <Image src="/images/logo.jpg" fill alt="Logo" />
          </div>

          <ul role="list" className="space-y-4">
            {STORE_INFORMATION.map((item) => (
              <li
                key={item.id}
                role="listitem"
                className="flex items-start gap-x-2"
              >
                {item.icon}

                <Text className="text-nowrap font-medium">{item.label}:</Text>

                <Text className="text-pretty">{item.desc}</Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 flex flex-col gap-y-4">
          <TypographyH3>Địa điểm</TypographyH3>

          <GoogleMapComponent
            address="01 Thi Sách, quận Hải Châu, thành phố Đà Nẵng"
            label="Bio Teabreak"
          />
        </div>

        <div className="col-span-1 flex flex-col gap-y-4">
          <TypographyH3>Fanpage</TypographyH3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
