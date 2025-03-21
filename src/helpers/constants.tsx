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
    text: "Giới thiệu",
    href: "#gioi-thieu",
  },
  {
    id: uuidv4(),
    text: "Dịch vụ",
    href: "#dich-vu",
  },
  {
    id: uuidv4(),
    text: "Sự kiện",
    href: "#su-kien",
  },
  {
    id: uuidv4(),
    text: "Các đánh giá & Đối tác",
    href: "#danh-gia-va-doi-tac",
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

export const SERVICE_LIST = [
  {
    id: 1,
    label: "Dịch vụ 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    background: "/images/fallback-image.jpg",
  },
  {
    id: 2,
    label: "Dịch vụ 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    background: "/images/fallback-image.jpg",
  },
  {
    id: 3,
    label: "Dịch vụ 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    background: "/images/fallback-image.jpg",
  },
  {
    id: 4,
    label: "Dịch vụ 4",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    background: "/images/fallback-image.jpg",
  },
];
