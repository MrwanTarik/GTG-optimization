import React from "react";

interface Data {
  title: string;
  list: string[];
}

function ListedUl({ title, list }: Data) {
  return (
    <>
      <h4 className="uppercase text-[21px]  lg:text-[24px] font-extrabold leading-[28px] mb-[35px]">
        {title}
      </h4>
      <ul className="list-disc pl-[32px]">
        {list.map((item : string, index: number) => (
          <li
            className="text-descBlack text-[16px] md:text-[18px] lg:text-[22px] leading-[1.7]"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListedUl;
