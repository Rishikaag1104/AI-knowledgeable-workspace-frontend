import { Search } from "lucide-react";

function Navbar({ active, setActive }) {
  return (
    <nav className="h-16 bg-[#0a1d34]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        
        <div className="flex items-center gap-10">
          <div
            onClick={() => setActive("documents")}
            className="text-xl font-bold text-white cursor-pointer"
          >
            AI<span className="text-indigo-600">Workspace</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavItem
              label="Documents"
              active={active === "documents"}
              onClick={() => setActive("documents")}
            />
            <NavItem
              label="Insights"
              active={active === "insights"}
              onClick={() => setActive("insights")}
            />
            <NavItem
              label="Upload"
              active={active === "upload"}
              onClick={() => setActive("upload")}
            />
          </div>
        </div>

        

      </div>
    </nav>
  );
}

function NavItem({ label, active, onClick }) {
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer pb-1 transition
        ${
          active
            ? "text-gray-300 hover:text-white "
            : "text-gray-300 hover:text-white"
        }`}
    >
      {label}
    </span>
  );
}

export default Navbar;
