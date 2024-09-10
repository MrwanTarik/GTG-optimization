import ApplicationsCardsLayout from "./ApplicationsCardsLayout";
import ProductApplications from "./ProductApplications";

function ApplicationSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[60px] xl:gap-[118px] pt-[50px] pb-[75px] lg:pt-[96px] lg:pb-[159px]">
      <ProductApplications
        href={"/products/products-list"}
        classes="lg:max-w-[709px]"
      />
      <div className="lg:max-w-[809px] flex justify-between gap-[25px]  md:gap-[50px] lg:gap-[25px] xl:gap-[50px]">
        <ApplicationsCardsLayout />
      </div>
    </div>
  );
}
export default ApplicationSection;
