import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="py-16 bg-gradient-to-r from-[#F5F7FA] to-[#EBF4FF]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Explore Job Categories
        </h2>
        <p className="text-gray-600 mt-2">
          Find opportunities tailored to your skills and ambitions.
        </p>
      </div>
      <Carousel className="w-full max-w-3xl mx-auto relative">
        <CarouselContent className="flex gap-6">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Button
                onClick={() => searchJobHandler(category)}
                variant="outline"
                className="w-full py-3 rounded-full border-2 border-[#6A38C2] hover:bg-[#6A38C2] hover:text-white transition-colors duration-300"
              >
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
