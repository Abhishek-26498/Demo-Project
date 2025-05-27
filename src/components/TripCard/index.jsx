import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaSuitcase,
  FaTags,
} from "react-icons/fa";
import InfoItem from "./InfoItem";
import { Card } from "../ui/card";

const TripCard = () => {
  return (
    <div className="flex flex-col items-center p-6  max-w-full mx-auto text-center">
      <h1 className="text-2xl sm:text-[52px] text-[#384B40] font-bold  mb-2">
        Balinese Day with a Local <br />
        Family
      </h1>
      <p className="text-black mb-6 max-w-xl font-normal">
        Immerse yourself in the heart of Balinese culture by spending a day with
        a local family. This authentic experience offers a unique glimpse into
        daily life, traditions, and the warmth of Balinese hospitality.
      </p>

      <Card className="bg-transparent items-center min-h-[130px] rounded-2xl flex flex-row gap-14 flex-wrap w-full md:divide-x divide-[#384B4033] justify-evenly md:justify-center border-[#384B4033]">
        <InfoItem
          icon={<FaMapMarkerAlt size={20} />}
          label="Location"
          value="Kaleki"
        />
        <InfoItem
          icon={<FaClock size={20} />}
          label="Duration"
          value="Morning 9–12"
        />
        <InfoItem icon={<FaUsers size={20} />} label="Escapees" value="8" />
        <InfoItem
          icon={<FaSuitcase size={20} />}
          label="Type of trip"
          value="Private"
        />
        <InfoItem
          icon={<FaTags size={20} />}
          label="Category"
          value="Full day trip"
        />
      </Card>
    </div>
  );
};

export default TripCard;
