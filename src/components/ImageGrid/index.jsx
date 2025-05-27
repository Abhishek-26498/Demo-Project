import Image from "next/image";
import { Card } from "../ui/card";

export function ImageGrid({ images }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full h-full">
      {/* Left column: two stacked images */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <Card className="rounded-xl p-0 overflow-hidden shadow-xl w-full h-[250px]">
          <Image
            src={images[0]}
            alt="Balinese image 1"
            width={600}
            height={250}
            className="object-cover w-full h-full"
          />
        </Card>
        <Card className="rounded-xl p-0 overflow-hidden shadow-xl w-full h-[250px]">
          <Image
            src={images[1]}
            alt="Balinese image 2"
            width={600}
            height={250}
            className="object-cover w-full h-full"
          />
        </Card>
      </div>

      {/* Right column: single tall image */}
      <Card className="rounded-xl p-0 overflow-hidden shadow-xl w-full md:w-1/2 h-[516px]">
        <Image
          src={images[2]}
          alt="Balinese image 3"
          width={600}
          height={516}
          className="object-cover w-full h-full"
        />
      </Card>
    </div>
  );
}
