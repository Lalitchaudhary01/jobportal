import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 sm:px-8">
        <div className="my-10">
          <h1 className="font-bold text-3xl text-gray-800">
            Your Company Name
          </h1>
          <p className="text-gray-600 mt-2">
            What would you like to give your company name? You can change this
            later.
          </p>
        </div>

        <div className="mb-6">
          <Label className="text-lg text-gray-700">Company Name</Label>
          <Input
            type="text"
            className="my-2 p-3 border-2 border-gray-300 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A38C2]"
            placeholder="JobHunt, Microsoft, etc."
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
            className="border-gray-600 text-gray-700 hover:bg-gray-200 transition duration-300"
          >
            Cancel
          </Button>
          <Button
            onClick={registerNewCompany}
            className="bg-[#6A38C2] text-white hover:bg-[#5b30a6] transition duration-300"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
