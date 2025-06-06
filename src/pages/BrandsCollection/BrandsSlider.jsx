const BrandsSlider = ({ brand }) => {
  const { image } = brand;
  return (
    <div className="carousel-item w-full bg-slate-700">
      <img
        src={image}
        className="w-full h-full rounded-md"
        alt="Tailwind CSS Carousel component"
      />
    </div>
  );
};

export default BrandsSlider;
