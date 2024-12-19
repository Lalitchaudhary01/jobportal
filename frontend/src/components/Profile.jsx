import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-gradient-to-br from-[#F3E5F5] via-[#E1BEE7] to-[#CE93D8] min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-10 p-8 shadow-xl transform transition duration-500 hover:scale-105">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="profile"
                className="rounded-full"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-2xl text-[#6A1B9A]">
                {user?.fullname}
              </h1>
              <p className="text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right bg-gradient-to-r from-[#7B1FA2] to-[#AB47BC] text-white hover:opacity-90 shadow-md"
          >
            <Pen className="w-5 h-5" />
          </Button>
        </div>
        <div className="my-6">
          <div className="flex items-center gap-3 my-3 text-[#6A1B9A] hover:text-[#4A148C] transition">
            <Mail className="w-5 h-5" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-3 text-[#6A1B9A] hover:text-[#4A148C] transition">
            <Contact className="w-5 h-5" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-6">
          <h1 className="font-bold text-lg text-[#7B1FA2] mb-3">Skills</h1>
          <div className="flex flex-wrap items-center gap-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-[#F48FB1] to-[#F06292] text-white shadow-md px-3 py-1 hover:scale-105 transform transition"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label className="text-md font-bold text-[#7B1FA2]">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user?.profile?.resume}
              className="text-blue-500 hover:underline hover:text-blue-700 transition"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-lg transform transition duration-500 hover:scale-105">
        <h1 className="font-bold text-xl text-[#6A1B9A] mb-4">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
