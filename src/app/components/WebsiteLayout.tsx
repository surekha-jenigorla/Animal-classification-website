import { useState } from "react";
import { ClassificationResult, Page } from "../App";
import DashboardPage from "./DashboardPage";
import GalleryPage from "./GalleryPage";
import HistoryPage from "./HistoryPage";
import ClassifierPage from "./ClassifierPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import ProfilePanel from "./ProfilePanel";
import AboutPage from "./AboutPage";
import { 
  LayoutDashboard, 
  ScanLine, 
  Image, 
  History, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Home,
  User,
  Info
} from "lucide-react";

interface WebsiteLayoutProps {
  history: ClassificationResult[];
  onClassify: (result: ClassificationResult) => void;
  onLogout: () => void;
}

export default function WebsiteLayout({ history, onClassify, onLogout }: WebsiteLayoutProps) {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="h-screen w-full flex bg-[#f8f9fa]">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-[#e5e7eb] flex flex-col transition-all duration-300 shadow-sm relative`}
      >
        {/* Logo & Toggle */}
        <div className="p-4 border-b border-[#e5e7eb]">
          <div className="flex items-center justify-between">
            {isSidebarOpen ? (
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center shadow-md">
                  <span className="text-2xl">🐄</span>
                </div>
                <div>
                  <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0d542b]">Livestock AI</h2>
                  <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Classifier v1.0</p>
                </div>
              </div>
            ) : (
              <div className="size-10 rounded-xl bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center shadow-md mx-auto">
                <span className="text-2xl">🐄</span>
              </div>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`absolute ${isSidebarOpen ? "right-[-12px]" : "right-[-12px]"} top-[72px] size-6 rounded-full bg-white border-2 border-[#e5e7eb] hover:border-[#00a63e] flex items-center justify-center shadow-md transition-colors z-10`}
        >
          {isSidebarOpen ? (
            <ChevronLeft className="size-4 text-[#717182]" />
          ) : (
            <ChevronRight className="size-4 text-[#717182]" />
          )}
        </button>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setCurrentPage("home")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentPage === "home"
                ? "bg-gradient-to-r from-[#00a63e] to-[#009689] text-white shadow-md scale-[1.02]"
                : "hover:bg-[#f8f9fa] text-[#4a5565]"
            }`}
          >
            <Home className="size-5 shrink-0" />
            {isSidebarOpen && (
              <span className="font-['Arimo:Regular',sans-serif] font-medium">Home</span>
            )}
          </button>

          <button
            onClick={() => setCurrentPage("about")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentPage === "about"
                ? "bg-gradient-to-r from-[#155dfc] to-[#4f39f6] text-white shadow-md scale-[1.02]"
                : "hover:bg-[#f8f9fa] text-[#4a5565]"
            }`}
          >
            <Info className="size-5 shrink-0" />
            {isSidebarOpen && (
              <span className="font-['Arimo:Regular',sans-serif] font-medium">About</span>
            )}
          </button>

          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentPage === "dashboard"
                ? "bg-gradient-to-r from-[#155dfc] to-[#4f39f6] text-white shadow-md scale-[1.02]"
                : "hover:bg-[#f8f9fa] text-[#4a5565]"
            }`}
          >
            <LayoutDashboard className="size-5 shrink-0" />
            {isSidebarOpen && (
              <span className="font-['Arimo:Regular',sans-serif] font-medium">Dashboard</span>
            )}
          </button>

          <button
            onClick={() => setCurrentPage("classifier")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentPage === "classifier"
                ? "bg-gradient-to-r from-[#9810fa] to-[#ad46ff] text-white shadow-md scale-[1.02]"
                : "hover:bg-[#f8f9fa] text-[#4a5565]"
            }`}
          >
            <ScanLine className="size-5 shrink-0" />
            {isSidebarOpen && (
              <span className="font-['Arimo:Regular',sans-serif] font-medium">AI Classifier</span>
            )}
          </button>

          <button
            onClick={() => setCurrentPage("gallery")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentPage === "gallery"
                ? "bg-gradient-to-r from-[#00a63e] to-[#009689] text-white shadow-md scale-[1.02]"
                : "hover:bg-[#f8f9fa] text-[#4a5565]"
            }`}
          >
            <Image className="size-5 shrink-0" />
            {isSidebarOpen && (
              <span className="font-['Arimo:Regular',sans-serif] font-medium">Animal Gallery</span>
            )}
          </button>

          <button
            onClick={() => setCurrentPage("history")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentPage === "history"
                ? "bg-gradient-to-r from-[#F54900] to-[#ff8a50] text-white shadow-md scale-[1.02]"
                : "hover:bg-[#f8f9fa] text-[#4a5565]"
            }`}
          >
            <History className="size-5 shrink-0" />
            {isSidebarOpen && (
              <span className="font-['Arimo:Regular',sans-serif] font-medium">Scan History</span>
            )}
          </button>

          <button
            onClick={() => setCurrentPage("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              currentPage === "profile"
                ? "bg-gradient-to-r from-[#9810fa] to-[#e60076] text-white shadow-md scale-[1.02]"
                : "hover:bg-[#f8f9fa] text-[#4a5565]"
            }`}
          >
            <User className="size-5 shrink-0" />
            {isSidebarOpen && (
              <span className="font-['Arimo:Regular',sans-serif] font-medium">Profile</span>
            )}
          </button>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-[#e5e7eb]">
          <button 
            onClick={() => setIsProfileOpen(true)}
            className={`w-full flex items-center gap-3 ${isSidebarOpen ? "" : "justify-center"} hover:bg-[#f8f9fa] p-3 rounded-xl transition-colors`}
          >
            <div className="size-10 rounded-full bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold shrink-0 shadow-md">
              F
            </div>
            {isSidebarOpen && (
              <div className="flex-1 text-left">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">Farmer</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">View Profile</p>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Header */}
        <header className="bg-white border-b border-[#e5e7eb] px-8 py-5 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a] mb-1">
                {currentPage === "home" && "Home"}
                {currentPage === "dashboard" && "Dashboard"}
                {currentPage === "classifier" && "AI Classifier"}
                {currentPage === "gallery" && "Animal Gallery"}
                {currentPage === "history" && "Scan History"}
                {currentPage === "profile" && "Profile"}
                {currentPage === "about" && "About"}
              </h1>
              <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                {currentPage === "home" && "Welcome to Livestock AI"}
                {currentPage === "dashboard" && "Analytics & Insights"}
                {currentPage === "classifier" && "Upload & identify livestock"}
                {currentPage === "gallery" && "Learn about different breeds"}
                {currentPage === "history" && "View all your classifications"}
                {currentPage === "profile" && "Manage your account"}
                {currentPage === "about" && "Learn more about Livestock AI"}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {currentPage !== "classifier" && (
                <button
                  onClick={() => setCurrentPage("classifier")}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#00a63e] to-[#009689] px-6 py-3 rounded-xl text-white font-['Arimo:Bold',sans-serif] font-bold hover:shadow-lg transition-all shadow-md"
                >
                  <Sparkles className="size-5" />
                  Classify Now
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {currentPage === "home" && <HomePage userName="Farmer" onNavigate={setCurrentPage} />}
          {currentPage === "dashboard" && <DashboardPage history={history} onNavigate={setCurrentPage} />}
          {currentPage === "classifier" && <ClassifierPage onClassify={onClassify} onNavigate={setCurrentPage} />}
          {currentPage === "gallery" && <GalleryPage />}
          {currentPage === "history" && <HistoryPage history={history} />}
          {currentPage === "profile" && <ProfilePage onLogout={onLogout} />}
          {currentPage === "about" && <AboutPage />}
        </div>
      </main>

      {/* Profile Panel */}
      <ProfilePanel isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} onLogout={onLogout} />
    </div>
  );
}