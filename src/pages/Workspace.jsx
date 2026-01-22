import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import bg from "../assets/bg.jpg";
import Documents from "./workspace/Documents";
import Chat from "./workspace/Chat";
import Insights from "./workspace/Insights";
import Upload from "./workspace/Upload";


function Workspace() {
  const [activePage, setActivePage] = useState("documents");

  const renderPage = () => {
    switch (activePage) {
      case "chat":
        return <Chat />;
      case "insights":
        return <Insights />;
      case "upload":
        return <Upload />;
       default:
        return <Documents />;
    }
  };
  return (
    <div className="relative h-screen text-white">

      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#020817]/80 to-black/60 backdrop-blur-sm"></div>


      
      <div className="relative z-10 h-full">
        <Navbar  active={activePage} setActive={setActivePage}/>

        <div className="flex h-[calc(100vh-64px)]">
          <Sidebar active={activePage} setActive={setActivePage} />

          <main className="flex-1 p-6 overflow-y-auto">
            {renderPage()}
          </main>
        </div>
      </div>

    </div>
  );
}

export default Workspace;
