import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

function Layout() {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex overflow-x-hidden">
        {/* Sidebar */}
        <SideBar />

        {/* Content Wrapper */}
        <div className="flex-1 w-full ml-0 md:ml-64 flex flex-col min-w-0 transition-all duration-300">
            {/* TopBar Header */}
            <TopBar />

            {/* Main Content Area */}
            <main className="p-4 md:p-6 flex-1 w-full max-w-full overflow-x-hidden">
                <Outlet />
            </main>
        </div>
      </div>
    );
}

export default Layout;