"use client";
import React, { useEffect, useState } from "react";
import Heading from "@/components/ui/Heading";
import { checkPathNameWithTitle } from "@/app/utils/helper";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Application {
  title: string;
  description: string;
  gallery: string[];
  poster: string;
}

const applicationData = [
  {
    title: "Plumbing / Hvac",
    description: "descriptions.plumbing_hvac",
    gallery: [
      "/assets/images/application/application-11.webp",
      "/assets/images/application/application-12.webp",
      "/assets/images/application/application-13.webp",
      "/assets/images/application/application-14.webp",
      "/assets/images/application/application-15.webp",
      "/assets/images/application/application-16.webp",
      "/assets/images/application/application-17.webp",
      "/assets/images/application/application-18.webp",
      "/assets/images/application/application-19.webp",
      "/assets/images/application/application-120.webp",
      "/assets/images/application/application-121.webp",
      "/assets/images/application/application-122.webp",
      "/assets/images/application/application-123.webp",
      "/assets/images/application/application-124.webp",
      "/assets/images/application/application-125.webp",
      "/assets/images/application/application-126.webp",
    ],
    poster: "bg-application1",
  },
  {
    title: "Natural Gas",
    description: "descriptions.natural_gas",
    gallery: [
      "/assets/images/application/application2.webp",
      "/assets/images/application/application-21.webp",
      "/assets/images/application/application-22.webp",
      "/assets/images/application/application-23.webp",
      "/assets/images/application/application-24.webp",
      "/assets/images/application/application-25.webp",
      "/assets/images/application/application-26.webp",
      "/assets/images/application/application-27.webp",
      "/assets/images/application/application-28.webp",
      "/assets/images/application/application-29.webp",
      "/assets/images/application/application-220.webp",
      "/assets/images/application/application-221.webp",
      "/assets/images/application/application-222.webp",
      "/assets/images/application/application-223.webp",
      "/assets/images/application/application-224.webp",
      "/assets/images/application/application-225.webp",
    ],
    poster: "bg-application2",
  },
  {
    title: "Electrical",
    description: "descriptions.electrical",
    gallery: [
      "/assets/images/application/application-31.webp",
      "/assets/images/application/application-32.webp",
      "/assets/images/application/application-33.webp",
      "/assets/images/application/application-34.webp",
      "/assets/images/application/application-35.webp",
      "/assets/images/application/application-36.webp",
      "/assets/images/application/application-37.webp",
      "/assets/images/application/application-38.webp",
      "/assets/images/application/application-39.webp",
    ],
    poster: "bg-application3",
  },
  {
    title: "Telecom",
    description: "descriptions.telecom",
    gallery: [
      "/assets/images/application/application-41.webp",
      "/assets/images/application/application-42.webp",
      "/assets/images/application/application-43.webp",
      "/assets/images/application/application-44.webp",
      "/assets/images/application/application-45.webp",
      "/assets/images/application/application-46.webp",
      "/assets/images/application/application-47.webp",
      "/assets/images/application/application-48.webp",
      "/assets/images/application/application-49.webp",
      "/assets/images/application/application-420.webp",
      "/assets/images/application/application-421.webp",
    ],
    poster: "bg-application4",
  },
];

function Page() {
  const t = useTranslations("application");
  const { id } = useParams<{ id: string }>();

  const [application, setApplication] = useState<Application | null>(null);

  useEffect(() => {
    const selectedApplication = checkPathNameWithTitle<Application>(
      id,
      applicationData
    );

    setApplication(selectedApplication);
  }, [id]);
  if (application)
    return (
      <div>
        <Heading
          subTitle={t("headings.subTitle")}
          title={t(
            `titles.${application.title
              .toLowerCase()
              .replace(/[^a-z0-9\s]/g, "")
              .replace(/\s+/g, "_")}`
          )}
          background={application.poster}
        />
        <div className="container">
          <div className=" pt-[4.688vw]">
            <p className="text-[16px] md:text-[18px] xl:text-[22px] text-descBlack leading-[1.7] mb-4 whitespace-pre-wrap">
              {t(application.description)}
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6  pb-[4.688vw]">
            {application.gallery.map((image, index) => (
              <div
                className="col-span-6  md:col-span-4 lg:col-span-3"
                key={index}
              >
                <div className="h-[180px] md:h-[280px] lg:h-[315px] xl:h-[385px] pb-6">
                  <Image
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    src={image}
                    alt={`${application.poster}-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Page;
