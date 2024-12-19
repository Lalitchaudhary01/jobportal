import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-300"
    >
      <div>
        <h1 className="font-medium text-lg text-[#1a1a1a]">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-xl my-2 text-[#6A38C2] hover:text-[#53299E] transition">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-600 line-clamp-2">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge
          className="text-blue-700 font-bold bg-blue-100 hover:bg-blue-200 transition"
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className="text-[#F83002] font-bold bg-red-100 hover:bg-red-200 transition"
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="text-[#7209b7] font-bold bg-purple-100 hover:bg-purple-200 transition"
          variant="ghost"
        >
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
