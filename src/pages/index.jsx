import { useEffect, useState } from "react";

import ExperienceDetails from "../components/ExperiencDetails";
import { ImageGrid } from "../components/ImageGrid";
import TestimonialsSection from "../components/TestimonialsSection";
import TripCard from "../components/TripCard";

const Home = () => {
  const [isMounted, setIsmounted] = useState(false);
  const images1 = [
    "/images/img-2.png",
    "/images/img5.jpg",
    "/images/img-3.png",
  ];
  const images2 = [
    "/images/img-4.png",
    "/images/img-5.png",
    "/images/img-6.png",
  ];

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="bg-foreground">
      <div className=" pb-16">
        <div className="w-full flex flex-col lg:flex-row gap-6  p-6 md:p-16 h-full">
          <ImageGrid images={images1} />
          <ImageGrid images={images2} />
        </div>
        <TripCard />
      </div>
      <ExperienceDetails />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
