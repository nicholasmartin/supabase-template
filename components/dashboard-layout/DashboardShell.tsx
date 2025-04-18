"use client";

import React from "react";
import AppSidebar from "@/components/dashboard-layout/AppSidebar";
import Backdrop from "@/components/dashboard-layout/Backdrop";
import DashboardContent from "@/components/dashboard-layout/DashboardContent";
import { ThemeProvider } from "@/context/ThemeContext";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen xl:flex">
        {/* Sidebar and Backdrop */}
        <AppSidebar />
        <Backdrop />
        
        {/* Main Content Area */}
        <DashboardContent>{children}</DashboardContent>
      </div>
    </ThemeProvider>
  );
}
