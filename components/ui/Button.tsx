import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import ArrowWhite from "@/public/assets/icons/arrow-white.svg";
import Arrow from "@/public/assets/icons/arrow.svg";
import Image from "next/image";
interface Data {
  children: string;
  href: string ;
  type: string;
  classes?: string;
}
function Button({ children, href, type, classes = "" }: Data) {
  const bgColor = type === "primary" ? "bg-red" : "bg-black";
  if (type === "no-bg")
    return (
      <Link className="flex items-center" href={href}>
        <span className={`text-[#0E0D0D] font-medium  mr-[10px] ${classes}`}>
          {children}
        </span>
        {classes === "text-white" ? (
          <Image src={ArrowWhite} alt="right-arrow" />
        ) : (
          <Image src={Arrow} alt="right-arrow" />
        )}
      </Link>
    );
  if (type === "realButton")
    return (
      <button
        className={`flex items-center w-fit py-2 px-4 lg:py-4 lg:px-8 rounded-sm text-white bg-red ${classes}`}
      >
        <span className="mr-[10px] text-[14px] md:text-[18px] xl:text-[22px] font-extrabold uppercase leading-[1.7]">
          {children}
        </span>
        <Image src={ArrowWhite} alt="right-arrow" />
      </button>
    );
  return (
    <Link
      href={href}
      className={`flex items-center w-fit py-2 px-4 lg:py-4 lg:px-8 rounded-sm text-white ${bgColor} ${classes}`}
    >
      <span className="mr-[10px] text-[14px] md:text-[18px] xl:text-[22px] font-extrabold uppercase leading-[1.7]">
        {children}
      </span>
      <Image src={ArrowWhite} alt="right-arrow" />
    </Link>
  );
}

export default Button;
