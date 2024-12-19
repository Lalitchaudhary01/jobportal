import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-white p-5 rounded-lg shadow-lg">
      <h1 className="font-extrabold text-2xl text-center mb-4 text-[#F1FAEE]">
        Filter Jobs
      </h1>
      <hr className="border-[#F1FAEE] mb-6" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {fitlerData.map((data, index) => (
          <div key={index} className="mb-6">
            <h1 className="font-bold text-lg text-[#E63946] mb-3">
              {data.fitlerType}
            </h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div
                  key={itemId}
                  className="flex items-center space-x-3 my-3 hover:bg-[#E63946] hover:text-white px-3 py-2 rounded-lg transition-transform transform hover:scale-105"
                >
                  <RadioGroupItem
                    value={item}
                    id={itemId}
                    className="checked:bg-[#F1FAEE] focus:ring-offset-[#E63946]"
                  />
                  <Label
                    htmlFor={itemId}
                    className="cursor-pointer text-lg hover:text-white"
                  >
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
