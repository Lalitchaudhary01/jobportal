import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="bg-gradient-to-r from-[#FDFCFB] to-[#E2D1F9] py-12 md:py-16">
      <div className="container mx-auto text-center px-4">
        <div className="flex flex-col gap-6">
          <span className="mx-auto px-4 py-2 rounded-full bg-[#FFE0E3] text-[#FF4C4C] font-semibold shadow-sm text-sm md:text-base">
            Your #1 Destination for Jobs
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-snug md:leading-tight">
            Unlock New Opportunities <br />
            and Build the Career <br />
            <span className="text-[#6A38C2] underline decoration-wavy">
              You’ve Always Wanted
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-xl mx-auto">
            Explore thousands of opportunities and build the career you’ve
            always dreamed of. Easy, seamless, and just for you.
          </p>
          <div className="relative flex w-full md:w-[70%] lg:w-[50%] mx-auto shadow-lg rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Find your dream jobs..."
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none text-sm md:text-base"
            />
            <Button
              onClick={searchJobHandler}
              className="bg-gradient-to-r from-[#6A38C2] to-[#A658D1] text-white px-4 md:px-6 py-3 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
