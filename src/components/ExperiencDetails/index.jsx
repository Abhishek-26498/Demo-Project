import {
  FaMapMarkerAlt,
  FaClock,
  FaLock,
  FaStar,
  FaLeaf,
  FaHeart,
} from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { Card } from "../ui/card";
import { FiCompass } from "react-icons/fi";
import { Button } from "../ui/button";

const ExperienceDetails = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row max-w-full p-6 gap-16 justify-between md:py-24 md:px-16 bg-white">
      {/* Left Section */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-bold text-[#384B40] mb-4">
          Experience a Day with a Balinese Family
        </h1>

        <p className="text-gray-600 mb-4">
          Slow down. Watch the light move across the rice fields. Learn how to
          make coconut oil the way it’s been done for generations. This is Bali
          with soul — the part you don’t find in guidebooks.
        </p>

        <h2 className="text-md font-semibold text-[#384B40] mb-2">
          How can I connect with locals without it feeling forced or touristy?
        </h2>

        <p className="text-gray-600 mb-6">
          You spend a day with Tiwi and her family. You help make offerings,
          walk their land, cook lunch together, and share stories. No
          performance. Just presence.
        </p>

        <h3 className="text-2xl font-semibold text-[#384B40] mb-3">
          What’s included?
        </h3>
        <ul className="text-gray-700 space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <IoDiamondOutline className="text-orange-500" /> Walk through the
            rice fields with Tiwi
          </li>
          <li className="flex items-center gap-2">
            <FaLeaf className="text-orange-500" /> Learn how to make offerings &
            coconut oil
          </li>
          <li className="flex items-center gap-2">
            <FaHeart className="text-orange-500" /> Cook & enjoy an authentic
            Balinese lunch
          </li>
          <li className="flex items-center gap-2">
            <FiCompass className="text-orange-500" /> Option to stay overnight
            in the family home
          </li>
        </ul>

        <div className="flex flex-wrap gap-3 text-sm text-white">
          <Tag icon={<FaMapMarkerAlt />} label="Village near Ubud" />
          <Tag icon={<FaClock />} label="9am - 12am" />
          <Tag icon={<FaLock />} label="Private" />
        </div>
      </div>

      {/* Right Section - Booking Card */}
      <Card className="w-full lg:w-1/3 bg-orange-50 rounded-xl p-5 shadow-md border-l-0 border-t-0 border-r-2 border-b-2 border-red-500">
        <div className="flex items-center mb-2">
          <div className="text-yellow-400 flex text-xl mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={25} />
            ))}
          </div>
          <p className="text-gray-700 text-lg font-semibold ml-1">4.9 (120)</p>
        </div>

        <h2 className="text-2xl font-semibold text-green-900 mb-2">
          From IDR 150,000.00<span className="text-sm">/ Person</span>
        </h2>

        <a
          href="#"
          className="text-lg text-gray-400 underline mb-4 inline-block"
        >
          Show Prices
        </a>

        <form className="space-y-3">
          <select className="w-full p-2 border rounded" defaultValue="">
            <option disabled value="">
              Guests
            </option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>

          <input type="date" className="w-full p-2 border rounded" />

          <select className="w-full p-2 border rounded" defaultValue="">
            <option disabled value="">
              Select Add ons
            </option>
            <option>Lunch</option>
            <option>Overnight stay</option>
          </select>

          <Button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-xl w-fit cursor-pointer hover:bg-green-900 transition"
          >
            Reserve for free →
          </Button>
        </form>
      </Card>
    </div>
  );
};

const Tag = ({ icon, label }) => (
  <span className="flex items-center bg-green-900 text-white px-3 py-1 rounded-full space-x-2 text-sm">
    {icon}
    <span>{label}</span>
  </span>
);

export default ExperienceDetails;
