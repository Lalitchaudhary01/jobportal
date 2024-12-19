import React, { useEffect, useState } from "react";
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
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByText) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Table className="bg-white shadow-md rounded-lg overflow-hidden">
          <TableCaption>A list of your recently posted jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-gray-700">
                Company Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Role
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
            {filterJobs?.map((job) => (
              <TableRow
                key={job._id}
                className="border-b hover:bg-gray-50 transition-all duration-200"
              >
                <TableCell className="text-gray-800">
                  {job?.company?.name}
                </TableCell>
                <TableCell className="text-gray-800">{job?.title}</TableCell>
                <TableCell className="text-gray-500">
                  {job?.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="text-gray-600 hover:text-gray-800 cursor-pointer transition-all duration-200" />
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2 bg-white shadow-md rounded-md">
                      <div
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                        className="flex items-center gap-2 w-full cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-all"
                      >
                        <Edit2 className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold">Edit</span>
                      </div>
                      <div
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                        className="flex items-center w-full gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md mt-2 transition-all"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold">
                          Applicants
                        </span>
                      </div>
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

export default AdminJobsTable;
