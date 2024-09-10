import ApplicationCard from "./ApplicationCard";
const firColOfCards = [
  {
    image: "/assets/images/application1.webp",
    title: "cards.card1.title",
    description: "cards.card1.description",
    href: "/application/plumbing-hvac",
  },
  {
    image: "/assets/images/application2.webp",
    title: "cards.card2.title",
    description: "cards.card2.description",
    href: "/application/natural-gas",
  },
];

const secColOfCards = [
  {
    image: "/assets/images/application3.webp",
    title: "cards.card3.title",
    description: "cards.card3.description",
    href: "/application/electrical",
  },
  {
    image: "/assets/images/application4.webp",
    title: "cards.card4.title",
    description: "cards.card4.description",
    href: "/application/telecom",
  },
];

// const firColOfCards = [
//   {
//     image: "/assets/images/application1.webp",
//     title: "PLUMBING / HVAC",
//     description: "Seals live leaks up to 150PSI, on water, Air, and Steam.",
//     href: "/application/plumbing-hvac",
//   },
//   {
//     image: "/assets/images/application2.webp",
//     title: "NATURAL GAS",
//     description:
//       "Used by leading natural gas companies both locally and internationally.",
//     href: "/application/natural-gas",
//   },
// ];
// const secColOfCards = [
//   {
//     image: "/assets/images/application3.webp",
//     title: "ELECTRICAL",
//     description: "Outstanding performance for high or low voltage insulation.",
//     href: "/application/electrical",
//   },
//   {
//     image: "/assets/images/application4.webp",
//     title: "TELECOM",
//     description:
//       "Provides an enduring seal under extreme environmental conditions.",
//     href: "/application/telecom",
//   },
// ];
function ApplicationsCardsLayout() {
  return (
    <>
      <div className="flex flex-col gap-[35px] lg:gap-[75px]">
        {firColOfCards.map((card) => (
          <ApplicationCard
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
            href={card.href}
            classes="xl:max-w-[380px]"
          />
        ))}
      </div>
      <div className="flex flex-col lg:mt-[69px] gap-[35px] md:gap-[75px]">
        {secColOfCards.map((card) => (
          <ApplicationCard
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
            href={card.href}
            classes="xl:max-w-[380px]"
          />
        ))}
      </div>
    </>
  );
}

export default ApplicationsCardsLayout;
