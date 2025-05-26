import Image from "next/image";
import { Card } from "../ui/card";

export function ImageGrid({images}) {
  

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full h-full">
      <div className="flex flex-col gap-6 w-full">
        <Card className="rounded-xl p-0 overflow-hidden shadow-xl w-full min-h-[187px] h-full max-h-[272px] transition">
          <Image
            src={images[0]}
            alt="Balinese image 1"
            width={600}
            height={100}
            className="object-cover w-full h-full"
          />
        </Card>
        <Card className="rounded-xl p-0 overflow-hidden shadow-xl w-full min-h-[187px] h-full max-h-[272px] transition">
          <Image
            src={images[1]}
            alt="Balinese image 2"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </Card>
      </div>
      <Card className="rounded-xl p-0 overflow-hidden w-full shadow-xl min-h-[398px] h-full  transition">
        <Image
          src={images[2]}
          alt="Balinese image 3"
          width={600}
          height={800}
          className="object-cover w-full h-full "
        />
      </Card>
    </div>
  );
}
