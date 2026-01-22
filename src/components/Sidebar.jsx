import { FileText, Brain, BarChart2, Upload } from "lucide-react";

function Sidebar({ active, setActive }) {
  return (
    <aside className="w-64 bg-[#071426]/90 text-gray-300 h-[calc(100vh-64px)] p-4 backdrop-blur">
      <div className="space-y-2">
        <SidebarItem 
          icon={<FileText size={18} />}
          label="Documents"
          active={active === "documents"}
          onClick={() => setActive("documents")}
        />

        <SidebarItem
          icon={<Brain size={18} />}
          label="AI Chat"
          active={active === "chat"}
          onClick={() => setActive("chat")}
        />

        <SidebarItem
          icon={<BarChart2 size={18} />}
          label="Insights"
          active={active === "insights"}
          onClick={() => setActive("insights")}
        />

        <SidebarItem
          icon={<Upload size={18} />}
          label="Upload"
          active={active === "upload"}
          onClick={() => setActive("upload")}
        />

        
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
        ${active ? "bg-indigo-600 text-white shadow-md" : "hover:bg-white/10"}`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

export default Sidebar;
