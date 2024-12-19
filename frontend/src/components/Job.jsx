import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  // Function to calculate the number of days ago the job was posted
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-teal-300 via-green-300 to-blue-300 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100">
      {/* Time and Bookmark Section */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-600">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company Info Section */}
      <div className="flex items-center gap-4 mb-4">
        <Button className="p-3" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-xl font-semibold text-gray-800">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-gray-800 my-2">{job?.title}</h1>
        <p className="text-sm text-gray-700">{job?.description}</p>
      </div>

      {/* Job Details Section */}
      <div className="flex items-center gap-4 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-6">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="border-[#7209b7] text-[#7209b7] hover:bg-[#7209b7] hover:text-white transition-all"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] text-white hover:bg-[#5f32ad] transition-all">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
