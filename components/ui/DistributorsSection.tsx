"use client";
import React, { useState } from "react";
import DistributorCard from "@/components/ui/DistributorCard";
import { useTranslations } from "next-intl";
const distributors = [
  {
    country: "Chile",
    top: `CALYSERV E.I.R.L.
Servicios Y Ventas DE Insumos
Pasaje Valle Nevado 9578
Antofagasta Chile 1262474
TELEFONO: 76.440.920.5, Tel: (+56) 55 2 380 200, Cel: (+56) 9-738 98 636`,
    email: "CORREO: ol**********@ca******.cl",
    realEmail: "CORREO: olarraguibel@calyserv.cl",
    bottom: `CONTACTO: Osvaldo Larraguibel V.`,
  },
  {
    country: "Singapore",
    top: `Deacon Industries
Anchorvale Crescent, Anchorvale Parkview
Singapore 542338
Republic of Singapore
電話: + 65 9339 0180`,
    email: "電子郵件: de***************@gm***.com",
    realEmail: "電子郵件: deaconasiapacific@gmail.com",
    bottom: `接觸: Allan Liew`,
  },
  {
    country: "China",
    top: `Sichuan Guoneng Boguan New Energy Technology Co, LTD
No. 1501, Building 5, No. 66 Beijing Rd
Boyue City, Longquanyl District
Chengdu, Sichuan Prov 610000 China
张立君 手机：+86 18190854910`,
    email: "邮箱：76******@qq.com",
    realEmail: "邮箱：76471773@qq.com",
    bottom: `座机：028-64269556
网站：www.scgnbg.com      接觸: Lijun Zhang`,
  },
  {
    country: "Africa",
    top: `Semiife Investment and Trading Co. Ltd. RC 651358
10 Campbell Road, off Peter Odili Road
Trans Amadi Ind. Layout, Port Harcourt
Phone: +234 (0) 816 253 0745`,
    email: `Emails: Ol************@se*****.com
ka******@se*****.com`,
    realEmail: `Emails: Olarewaju.wale@semiife.com
kaslawal@semiife.com`,
    bottom: `Website: www.semiife.com`,
  },
  {
    country: "United Kingdom",
    top: `SWA
Abbey Mills, Charfield Road
Kingswood, Near Wotton-Under-Edge
Gloucestershire, GL12 8RL
"https://www.swaonline.co.uk"
Contact:Mark Smith`,
    email: "Email:ma********@sw*******.uk",
    realEmail: "Email:mark.smith@swaonline.co.uk",
    bottom: `T: 01453 846 581`,
  },
  {
    country: "USA Gas Industry",
    top: `Perc - Pipeline Equipment Resources Co
9 Mars Court
Boonton Twp, NJ 07005
Website: www.perc.us.com
Contact: Anthony Dunkley`,
    email: "Email: ad******@pe**.com",
    realEmail: "Email: adunkley@perc.us.com",
    bottom: `Phone: 416-788-4549`,
  },
  {
    country: "Japan",
    top: `Matex
Website: matex-tokyo.co.jp/llfa/
Contact: Toyokazu Uomi`,
    email: "E-mail: t_****@ma*********.jp",
    realEmail: "E-mail: t_uomi@matex-tokyo.co.jp",
    bottom: ``,
  },
];
const DistributorsSection = () => {
  const [showEmail, setShowEmail] = useState(false);
  const t = useTranslations("documentation_page");
  return (
    <div className="bg-black pt-[159px] pb-[199px] bg-distributors bg-no-repeat bg-right-bottom">
      <span className="w-[113px] flex h-[3px] mx-auto mb-[32px] text-[#DA2023] bg-[#DA2023]"></span>
      <h2 className="text-white font-extrabold leading-[130%] text-[50px] text-center pb-[119px]">
        {t("distributorsTitle")}
      </h2>
      <div className="container">
        <div
          className="grid grid-cols-12 gap-x-0 md:gap-x-[40px] lg:gap-x-[78px] gap-y-[48px]"
          onClick={() => setShowEmail(true)}
        >
          {distributors.map((distributer) => (
            <DistributorCard
              key={distributer.country}
              country={distributer.country}
              top={distributer.top}
              email={distributer.realEmail}
              bottom={distributer.bottom}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributorsSection;
