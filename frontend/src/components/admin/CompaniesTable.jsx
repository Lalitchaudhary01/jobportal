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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader className="bg-[#6A38C2] text-white">
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company) => (
            <TableRow key={company._id} className="hover:bg-gray-50">
              <TableCell>
                <Avatar>
                  <AvatarImage
                    className="rounded-full border-2 border-[#6A38C2]"
                    src={company.logo}
                  />
                </Avatar>
              </TableCell>
              <TableCell className="text-lg font-medium text-gray-800">
                {company.name}
              </TableCell>
              <TableCell className="text-gray-500">
                {company.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal className="text-gray-600 hover:text-[#6A38C2] transition-colors" />
                  </PopoverTrigger>
                  <PopoverContent className="w-32 bg-white shadow-md rounded-md">
                    <div
                      onClick={() =>
                        navigate(`/admin/companies/${company._id}`)
                      }
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    >
                      <Edit2 className="w-4 text-[#6A38C2]" />
                      <span className="text-gray-700">Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
