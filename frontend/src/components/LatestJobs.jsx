import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Explore the latest opportunities from top companies across various
        industries.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {allJobs.length <= 0 ? (
          <div className="col-span-full text-center text-gray-500">
            <span>No Jobs Available at the Moment</span>
          </div>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
      {allJobs.length > 6 && (
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-[#6A38C2] text-white font-semibold rounded-full hover:bg-[#53299E] transition">
            View All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestJobs;
