import Image from "next/image";
const CarImageGallery = ({ slice }) => {
  const car1 = slice.primary.carimage1;
  const car2 = slice.primary.carimage2;
  const car3 = slice.primary.carimage3;
  return (
    <section>
      <h1>Holis</h1>
      <Image
        src={car1.url}
        alt={car1.alt}
        width={car1.dimensions.width}
        height={car1.dimensions.height}
        layout="responsive"
      />
      <Image
        src={car2.url}
        alt={car2.alt}
        width={car2.dimensions.width}
        height={car2.dimensions.height}
        layout="responsive"
      />
      <Image
        src={car3.url}
        alt={car3.alt}
        width={car3.dimensions.width}
        height={car3.dimensions.height}
        layout="responsive"
      />
    </section>
  );
};

export default CarImageGallery;
