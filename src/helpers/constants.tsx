import { Mails, MapPinHouse, PhoneCall, Store } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const SOCIALS = [
  {
    id: uuidv4(),
    icon: "/icons/icon-facebook.svg",
    href: "#facebook",
    title: "facebook.com/",
  },
  {
    id: uuidv4(),
    icon: "/icons/icon-tiktok.svg",
    href: "#tiktok",
    title: "tiktok.com/",
  },
  {
    id: uuidv4(),
    icon: "/icons/icon-instagram.svg",
    href: "#instagram",
    title: "instagram.com/",
  },
];

export const NAVIGATES = [
  {
    id: uuidv4(),
    text: "Menu",
    href: "#menu",
  },
  {
    id: uuidv4(),
    text: "Sự kiện",
    href: "#event",
  },
  {
    id: uuidv4(),
    text: "Các đánh giá",
    href: "#rating",
  },
  {
    id: uuidv4(),
    text: "Liên hệ",
    href: "#contact-us",
  },
  {
    id: uuidv4(),
    text: "Về chúng tôi",
    href: "#about-us",
  },
];

export const STORE_INFORMATION = [
  {
    id: 1,
    label: "Tên cửa hàng",
    icon: <Store />,
    desc: "Bio Teabreak",
  },
  {
    id: 2,
    label: "Địa chỉ",
    icon: <MapPinHouse />,
    desc: "01 Thi Sách, quận Hải Châu, thành phố Đà Nẵng",
  },
  {
    id: 3,
    label: "Số điện thoại",
    icon: <PhoneCall />,
    desc: "+84-905-113-113",
  },
  {
    id: 4,
    label: "Email",
    icon: <Mails />,
    desc: "skeleton1522@gmail.com",
  },
];
