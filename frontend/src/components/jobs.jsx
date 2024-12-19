import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Section */}
          <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4">
            <FilterCard />
          </div>

          {/* Jobs Section */}
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            {filterJobs.length <= 0 ? (
              <div className="flex items-center justify-center h-full">
                <span className="text-xl font-semibold text-gray-600">
                  No jobs found matching your criteria.
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    key={job?._id}
                    className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105"
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
