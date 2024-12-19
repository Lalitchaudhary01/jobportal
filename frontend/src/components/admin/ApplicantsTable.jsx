import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Table className="bg-white shadow-lg rounded-lg overflow-hidden">
          <TableCaption>A list of your recent applicants</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-gray-700">
                Full Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Email
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Contact
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Resume
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Date
              </TableHead>
              <TableHead className="font-semibold text-gray-700 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applicants &&
              applicants?.applications?.map((item) => (
                <TableRow
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition-all duration-200"
                >
                  <TableCell className="text-gray-800">
                    {item?.applicant?.fullname}
                  </TableCell>
                  <TableCell className="text-gray-800">
                    {item?.applicant?.email}
                  </TableCell>
                  <TableCell className="text-gray-800">
                    {item?.applicant?.phoneNumber}
                  </TableCell>
                  <TableCell>
                    {item.applicant?.profile?.resume ? (
                      <a
                        className="text-blue-600 cursor-pointer hover:underline"
                        href={item?.applicant?.profile?.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item?.applicant?.profile?.resumeOriginalName}
                      </a>
                    ) : (
                      <span className="text-gray-500">NA</span>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {item?.applicant.createdAt.split("T")[0]}
                  </TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal className="text-gray-600 hover:text-gray-800 cursor-pointer transition-all duration-200" />
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2 bg-white shadow-md rounded-md">
                        {shortlistingStatus.map((status, index) => (
                          <div
                            onClick={() => statusHandler(status, item?._id)}
                            key={index}
                            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-all"
                          >
                            <span className="text-sm font-semibold">
                              {status}
                            </span>
                          </div>
                        ))}
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ApplicantsTable;
