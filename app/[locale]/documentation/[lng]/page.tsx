"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState, ChangeEvent } from "react";
import Spinner from "@/components/ui/Spinner";
import { useTranslations } from "next-intl";

const pdfLinks: Record<string, Record<string, string>> = {
  ar: {
    LLFAmanual: "1ZGNslSYgpY2vCcMzo3w_pANX6qh9Z4MD",
    Gardeflyer: "1Jd8HBI1EVYSUHqps2M17fdgQoEgELApk",
    Tape: "1Qc7cNAUDNY68zdPN9HUfTJdvIMH3Yx0b",
    Smooth: "1aIwIr_5KJS64UAFAGuiYEBbPuJi-tDUr",
    Garde: "1NVLfdBeg3NH0BpRL4MZ-FaznTW5htfoA",
  },
  zh: {
    LLFAmanual: "1JZEEe3cIOjgo2cNRQ959sO9F2HBebSAN",
    Gardeflyer: "1mHHf1f843pqTIvCQ7EmNDOyOUQpC2luN",
    Tape: "1gicuqj8s4v52nF0jRxOuRT_LfVTwgUVw",
    Smooth: "159GxS3PR58LmM348RMzozOX7-4JsRBKK",
    Garde: "1xW0Fotdwd-4WmsHT8r_TrKnbNYJcBuOk",
  },
  en: {
    LLFAmanual: "11CLPvOB_0kAUGHB1OQ6omtddPExN2rAS",
    Gardeflyer: "1mrpZ6wDwTxZdXAyAlMhGlgqMc9u-J5lS",
    Tape: "1qOsdL6A4619-qfkUoA1ixlGrnUuh3DR1",
    Smooth: "13z-OJFhRf_tITQta2nVp8XcZGX_VFpLw",
    Garde: "1f4S-8wPQM17H3dN-wCLW3J-Rohhj8Yk2",
  },
  fr: {
    LLFAmanual: "11pzNRtZK35GuILyDq6XJyVpw9_u6Ij_8",
    Gardeflyer: "1D8Bx6NiZpaLJQCH_eFywMH4UMciInOqb",
    Tape: "1_84Bg7Ty5itBuRXVI9QMeyOVlrBfXFm9",
    Smooth: "1HOgF1UASoVoLZ55gF2YJ7qGBCuM1NXUK",
    Garde: "1erOJma4TKywHm7VqwE7oCfZLZlIXsEQ7",
  },
  de: {
    LLFAmanual: "10014NyY6xztF7PevRyIj7QIxPQlhDNNA",
    Gardeflyer: "1T4oADk-gtX0VCazjJsfSCuh_TiamgJDs",
    Tape: "145hHafATIrUpinrBJh_WZcHGwI1SR5Wu",
    Smooth: "1ZBTyAwS5UBGupnvJS1tBX6NIUxr2jP8h",
    Garde: "1oAhBAqh2jV_c96rY--IYQJx828ischFH",
  },
  hi: {
    LLFAmanual: "10ikxXyaoDzuTpqxJa43plkwYzT5dSyKH",
    Gardeflyer: "14A3365-WmgrEerOeq-SM4slEjCHj5M3w",
    Tape: "12CTkjW5CBmyUwANJQUY0hG9anEAqlpGv",
    Smooth: "1Dl9twghd_PSg2cHCf0G_4ZS3OVGAdDP2",
    Garde: "1Axj5rAkUsEQBw3aA4R70KpZDB4JAR2rI",
  },
  it: {
    LLFAmanual: "1wwwIdOUMXcEsy-Nu_ksPxbqyEoEhpsU3",
    Gardeflyer: "1fjzZ27kBmiOHEgXnA8D4qU0bPHYedo1H",
    Tape: "1k_dN7gASX6TfPu27coyH_JyRGNMXxCUT",
    Smooth: "1DJVrWWF6IWtXeatmFPA2E9KnhCzUKvr-",
    Garde: "1NS_hsLT-NtcSUGGadN1GFDc4RlarwN0I",
  },
  ja: {
    LLFAmanual: "1pd1ObAMEjJm-4w__2cQYFPzAuAm8nj28",
    Gardeflyer: "1ednlXqrkXTRoGFE9lIEN3F5yvBcratWf",
    Tape: "1pkJVn_AKRt5vGDrgclM1KSt11E4Ebdiy",
    Smooth: "17wmeExy0v7n13dJ0_dxy_1U-w5ilp0aH",
    Garde: "15THSTbjLbjb14Ut8KEsU1A5cnIwWzLKu",
  },
  ko: {
    LLFAmanual: "17FGCMloHVPieFTe2NviVkaIx3_j5QS40",
    Gardeflyer: "1I_G_URode9DGRypWVlDyH7WTBITL7pee",
    Tape: "1PLQFdbP2L4jhn4U5k0jYLyYLWT35FWnc",
    Smooth: "1ReGR6X8X5SA2BjNMto3188oa3X00mhZY",
    Garde: "1JnYsOR6Zcot2hiuaB7RI4T-ixpZgL4kT",
  },
  pt: {
    LLFAmanual: "1L-7MjLFtbggMKxLpWAvsLjxX4kki9IaT",
    Gardeflyer: "1m33N9HZ7Ri5NteaAJKX9RrnM8FF7hJXp",
    Tape: "1miSjjoHv-1HC-aKcVCNJ7EI7rSvtRJc4",
    Smooth: "1fCbKCpXBzniU9GRZNlWH7qE-czGWEg-O",
    Garde: "1IhdzD9CW_WC9h5JYyVnyHmwHBnq5MqJD",
  },
  ru: {
    LLFAmanual: "1lH7-28wE8SXl2Nis-bIDN1Uxk4927Tge",
    Gardeflyer: "1yK06wK7V9siRAg5174FTREmtPZQ4-mQg",
    Tape: "1SRvOZd3q5xP0VDEeD84HdOlMj9i8NhpQ",
    Smooth: "1ow1Dj2I7wQ83wvqSDipUc-e1sMIE3DaX",
    Garde: "16mwDJDRM_MM-qRovrf_03p2q4TakZt3P",
  },
  es: {
    LLFAmanual: "1agtx98zHGmymGfB4kY-bocKv9jMvobaM",
    Gardeflyer: "1iG97tE_vBsgvI8tyso19KI4Eo_xl81Gp",
    Tape: "1sNhaZ1-2iy-UrbMnzWBhKLKRmI0UT4VO",
    Smooth: "1VcOaa89u_sr8eaBT5cjx-QNebYFhG1YI",
    Garde: "1rMz6LXvUWcYr1uO-3ZqYjAn6mUSvFuHl",
  },
};

const Page = () => {
  const t = useTranslations("documentation_page.pdf_viewer");
  const noPreview =
    "https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=5";
  const [selectedPdf, setSelectedPdf] = useState<string>(noPreview);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { lng } = useParams() as { lng: string };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
    const fileID = event.target.value;
    const viewerUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=${fileID}`;
    setSelectedPdf(viewerUrl);
  };

  const [lang, setLang] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    const selectedLang = pdfLinks.hasOwnProperty(lng) ? pdfLinks[lng] : null;
    setLang(selectedLang);
  }, [lng]);
  const handleIframeLoad = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);
  if (lang)
    return (
      <div className="bg-[#F2F2F2] pt-[137px] pb-[182px] ">
        <div className="max-w-[1000px] px-[20px] mx-auto">
          <div className="flex justify-between pb-[80px]">
            <div className="flex flex-col gap-y-[12px] w-[45%]">
              <label
                className="text-[24px] font-medium leading-[1.7] text-black"
                htmlFor="manual"
              >
                {t("manual")}
              </label>
              <select
                className="bg-white rounded-[2px] w-full text-[20px] leading-[170%] h-[70px] border border-solid border-[#C4C4C4] text-black"
                name="manual"
                id="manual"
                onChange={handleSelectChange}
                defaultValue={noPreview}
              >
                <option defaultValue={noPreview}> {t("select")}</option>
                <option value={lang.LLFAmanual}>LLFAmanual</option>
                <option value={lang.Gardeflyer}>Gardeflyer</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-[12px]  w-[45%]">
              <label
                className="text-[24px] font-medium leading-[1.7] text-black"
                htmlFor="safety"
              >
                {t("safety")}
              </label>
              <select
                className="bg-white rounded-[2px] w-full text-[20px] leading-[170%] h-[70px] border border-solid border-[#C4C4C4] text-black"
                name="safety"
                id="safety"
                onChange={handleSelectChange}
              >
                <option defaultValue={noPreview}>{t("select")}</option>
                <option value={lang.Tape}>Tape</option>
                <option value={lang.Smooth}>Smooth</option>
                <option value={lang.Garde}>Garde</option>
              </select>
            </div>
          </div>
          {isLoading && <Spinner />}
          {selectedPdf && (
            <iframe
              src={selectedPdf}
              style={{ width: "100%", height: "800px" }}
              frameBorder="0"
              onLoad={handleIframeLoad}
            ></iframe>
          )}
        </div>
      </div>
    );
};

export default Page;
