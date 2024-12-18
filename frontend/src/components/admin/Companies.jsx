import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Navbar from "../shared/Navbar";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name"
            // onChange={(e) => setInput(e.target.value)}
          />
          <Button>New Company</Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
