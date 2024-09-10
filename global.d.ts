declare module "react-slick" {
  interface Slider {
    slickGoTo: (index: number) => void;
  }
  const Slider: Slider;
  export default Slider;
}
