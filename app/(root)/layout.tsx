import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import NoticeDialog from "@/components/shared/NoticeDialog";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
      <NoticeDialog />
    </div>
  );
};

export default layout;
