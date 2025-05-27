const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2 text-left h-full px-4 md:px-14">
    <div className="flex gap-2 items-start">
      <span className="text-orange-500 mt-1.5">{icon}</span>
      <div>
        <p className="text-xl font-medium text-[#384B40]">{label}</p>
        <p className="text-sm font-semibold text-gray-500">{value}</p>
      </div>
    </div>
  </div>
);

export default InfoItem;
