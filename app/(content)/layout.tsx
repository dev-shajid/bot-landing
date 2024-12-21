// import Footer from "@/components/navigation/footer";
import ChatBot from "@/components/ChatBot";
import Navbar from "@/components/navigation/navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center w-full relative">
      <Navbar />
      <ChatBot />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default ContentLayout;
