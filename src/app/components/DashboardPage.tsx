import { ClassificationResult, Page } from "../App";
import svgPaths from "../../imports/svg-rzqg5co59y";
import { useState } from "react";

interface DashboardPageProps {
  history: ClassificationResult[];
  onNavigate: (page: Page) => void;
}

type TimeRange = "weekly" | "monthly" | "yearly";

export default function DashboardPage({ history, onNavigate }: DashboardPageProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>("weekly");

  const totalScans = history.length;
  const cattleScans = history.filter(h => h.type === "Cattle").length;
  const buffaloScans = history.filter(h => h.type === "Buffalo").length;
  const avgAccuracy = history.length > 0 
    ? Math.round(history.reduce((sum, r) => sum + r.confidence, 0) / history.length)
    : 94;
  const uniqueBreeds = new Set(history.map(r => r.breed)).size;
  const totalBreeds = 12;

  // Get breed counts for classification breakdown
  const breedCounts: Record<string, number> = {};
  history.forEach(h => {
    breedCounts[h.breed] = (breedCounts[h.breed] || 0) + 1;
  });
  const topBreeds = Object.entries(breedCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Data for different time ranges
  const getActivityData = () => {
    if (timeRange === "weekly") {
      return {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        values: [8, 6, 9, 4, 7, 3, 2],
        maxValue: 9,
        title: "Weekly Activity",
        subtitle: "Scans performed this week"
      };
    } else if (timeRange === "monthly") {
      return {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        values: [24, 28, 20, 19],
        maxValue: 28,
        title: "Monthly Activity",
        subtitle: "Scans performed this month"
      };
    } else {
      return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        values: [45, 52, 48, 61, 55, 49, 63, 58, 54, 67, 62, 39],
        maxValue: 67,
        title: "Yearly Activity",
        subtitle: "Scans performed this year"
      };
    }
  };

  const activityData = getActivityData();

  return (
    <div 
      className="space-y-6"
      style={{ 
        backgroundImage: "linear-gradient(142.113deg, rgb(240, 253, 244) 0%, rgb(236, 253, 245) 50%, rgb(240, 253, 250) 100%)" 
      }}
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Scans */}
        <div 
          className="rounded-2xl p-6 shadow-md relative overflow-hidden"
          style={{ backgroundImage: "linear-gradient(135.672deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 rounded-xl bg-[#155DFC] bg-opacity-20 flex items-center justify-center">
              <div className="size-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24.5 24.5">
                  <path d={svgPaths.p629f200} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
                </svg>
              </div>
            </div>
            <span className="bg-[#16C560] text-white px-3 py-1 rounded-full text-xs font-['Arimo:Bold',sans-serif] font-bold">
              +12%
            </span>
          </div>
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#1c398e] mb-1">{totalScans}</h3>
          <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#1447e6]">Total Scans</p>
        </div>

        {/* Accuracy */}
        <div 
          className="rounded-2xl p-6 shadow-md relative overflow-hidden"
          style={{ backgroundImage: "linear-gradient(135.675deg, rgb(240, 253, 244) 0%, rgb(220, 252, 231) 100%)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 rounded-xl bg-[#00A63E] bg-opacity-20 flex items-center justify-center">
              <div className="size-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24.5 24.5">
                  <path d={svgPaths.p2c56fd00} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
                  <path d={svgPaths.p10491f00} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
                </svg>
              </div>
            </div>
            <span className="bg-[#16C560] text-white px-3 py-1 rounded-full text-xs font-['Arimo:Bold',sans-serif] font-bold">
              +2%
            </span>
          </div>
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#0d542b] mb-1">{avgAccuracy}%</h3>
          <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#008236]">Accuracy</p>
        </div>

        {/* Unique Breeds */}
        <div 
          className="rounded-2xl p-6 shadow-md relative overflow-hidden"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 237, 213) 0%, rgb(255, 224, 178) 100%)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 rounded-xl bg-[#F54900] bg-opacity-20 flex items-center justify-center">
              <div className="size-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24.5 24.5">
                  <path d={svgPaths.p7492558} stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
                  <path d={svgPaths.p30348500} stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
                </svg>
              </div>
            </div>
            <span className="bg-[#F54900] text-white px-3 py-1 rounded-full text-xs font-['Arimo:Bold',sans-serif] font-bold">
              NEW
            </span>
          </div>
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#C13800] mb-1">{uniqueBreeds}</h3>
          <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#F54900]">Unique Breeds</p>
        </div>

        {/* Total Breeds */}
        <div 
          className="rounded-2xl p-6 shadow-md relative overflow-hidden"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(220, 252, 231) 0%, rgb(187, 247, 208) 100%)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 rounded-xl bg-[#16C560] bg-opacity-20 flex items-center justify-center">
              <div className="size-6">
                <svg className="block size-full" fill="none" viewBox="0 0 24.5 24.5">
                  <path d={svgPaths.p7bf5f00} stroke="#16C560" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
                </svg>
              </div>
            </div>
            <span className="bg-[#16C560] text-white px-3 py-1 rounded-full text-xs font-['Arimo:Bold',sans-serif] font-bold">
              +3
            </span>
          </div>
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#059142] mb-1">{totalBreeds}</h3>
          <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#16C560]">Total Breeds</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weekly Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-5 text-[#155DFC]">
                <svg className="block size-full" fill="none" viewBox="0 0 17.5 17.5">
                  <path d={svgPaths.p304a200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                </svg>
              </div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a]">{activityData.title}</h3>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182] mb-6">{activityData.subtitle}</p>

            {/* Activity Bars */}
            <div className="space-y-4">
              {activityData.labels.map((day, index) => {
                const value = activityData.values[index];
                const maxValue = activityData.maxValue;
                return (
                  <div key={day} className="flex items-center gap-3">
                    <span className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182] w-8">{day}</span>
                    <div className="flex-1 bg-[#f3f3f5] h-3 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#155dfc] to-[#4f39f6] h-full rounded-full transition-all duration-500"
                        style={{ width: `${(value / maxValue) * 100}%` }}
                      />
                    </div>
                    <span className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a] w-6">{value}</span>
                  </div>
                );
              })}
            </div>

            {/* Tab Buttons */}
            <div className="flex gap-2 mt-6 pt-6 border-t border-[#e5e7eb]">
              <button 
                className={`flex-1 px-4 py-2 rounded-lg font-['Arimo:Bold',sans-serif] font-bold text-sm transition-all ${ 
                  timeRange === "weekly" 
                    ? "bg-gradient-to-r from-[#155dfc] to-[#4f39f6] text-white shadow-md" 
                    : "bg-[#f3f3f5] text-[#717182] hover:bg-[#e5e7eb]"
                }`}
                onClick={() => setTimeRange("weekly")}
              >
                Weekly
              </button>
              <button 
                className={`flex-1 px-4 py-2 rounded-lg font-['Arimo:Bold',sans-serif] font-bold text-sm transition-all ${ 
                  timeRange === "monthly" 
                    ? "bg-gradient-to-r from-[#155dfc] to-[#4f39f6] text-white shadow-md" 
                    : "bg-[#f3f3f5] text-[#717182] hover:bg-[#e5e7eb]"
                }`}
                onClick={() => setTimeRange("monthly")}
              >
                Monthly
              </button>
              <button 
                className={`flex-1 px-4 py-2 rounded-lg font-['Arimo:Bold',sans-serif] font-bold text-sm transition-all ${ 
                  timeRange === "yearly" 
                    ? "bg-gradient-to-r from-[#155dfc] to-[#4f39f6] text-white shadow-md" 
                    : "bg-[#f3f3f5] text-[#717182] hover:bg-[#e5e7eb]"
                }`}
                onClick={() => setTimeRange("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Classification Breakdown */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-5 text-[#F54900]">
                <svg className="block size-full" fill="none" viewBox="0 0 17.5 17.5">
                  <path d={svgPaths.p2fc5c00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                </svg>
              </div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a]">Classification Breakdown</h3>
            </div>

            <div className="space-y-4">
              {/* Cattle */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="size-4">
                      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                        <circle cx="7" cy="7" r="6" fill="#F54900" />
                      </svg>
                    </div>
                    <span className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">Cattle</span>
                  </div>
                  <span className="bg-[#F54900] text-white px-3 py-1 rounded-full text-xs font-['Arimo:Bold',sans-serif] font-bold">
                    {cattleScans}
                  </span>
                </div>
                <div className="bg-[#f3f3f5] h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#F54900] h-full rounded-full"
                    style={{ width: `${totalScans > 0 ? (cattleScans / totalScans) * 100 : 0}%` }}
                  />
                </div>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182] mt-1">
                  {totalScans > 0 ? Math.round((cattleScans / totalScans) * 100) : 0}%
                </p>
              </div>

              {/* Buffalo */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="size-4">
                      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                        <circle cx="7" cy="7" r="6" fill="#155DFC" />
                      </svg>
                    </div>
                    <span className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">Buffalo</span>
                  </div>
                  <span className="bg-[#155DFC] text-white px-3 py-1 rounded-full text-xs font-['Arimo:Bold',sans-serif] font-bold">
                    {buffaloScans}
                  </span>
                </div>
                <div className="bg-[#f3f3f5] h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#155DFC] h-full rounded-full"
                    style={{ width: `${totalScans > 0 ? (buffaloScans / totalScans) * 100 : 0}%` }}
                  />
                </div>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182] mt-1">
                  {totalScans > 0 ? Math.round((buffaloScans / totalScans) * 100) : 0}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6">
          {/* Most Identified Breeds */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-5 text-[#9810FA]">
                <svg className="block size-full" fill="none" viewBox="0 0 17.5 17.5">
                  <path d={svgPaths.p7bf5f00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                </svg>
              </div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">Most Identified Breeds</h3>
            </div>

            <div className="space-y-3">
              {topBreeds.length > 0 ? topBreeds.map(([breed, count], index) => {
                const isCattle = ["Holstein", "Jersey", "Gir", "Sahiwal", "Red Sindhi"].includes(breed);
                return (
                  <div key={breed} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full ${isCattle ? "bg-[#F54900]" : "bg-[#155DFC]"} flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold text-sm`}>
                        {breed[0]}
                      </div>
                      <div>
                        <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">{breed}</p>
                        <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">{isCattle ? "Cattle" : "Buffalo"}</p>
                      </div>
                    </div>
                    <span className={`${isCattle ? "bg-[#F54900]" : "bg-[#155DFC]"} text-white px-3 py-1 rounded-full text-xs font-['Arimo:Bold',sans-serif] font-bold`}>
                      {count}
                    </span>
                  </div>
                );
              }) : (
                <p className="text-center text-sm text-[#717182] py-4">No scans yet</p>
              )}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-5 text-[#16C560]">
                <svg className="block size-full" fill="none" viewBox="0 0 17.5 17.5">
                  <path d={svgPaths.p304a200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                </svg>
              </div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">Performance Metrics</h3>
            </div>

            <div className="space-y-4">
              {/* Average Confidence */}
              <div className="bg-[#f0fdf4] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#16C560]">Average Confidence</p>
                  <div className="size-4 text-[#16C560]">
                    <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                      <path d="M7 1.75L8.75 5.25L12.25 5.83333L9.625 8.39583L10.2083 12.25L7 10.4375L3.79167 12.25L4.375 8.39583L1.75 5.83333L5.25 5.25L7 1.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#16C560]">92.5%</p>
              </div>

              {/* Success Rate */}
              <div className="bg-[#eff6ff] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#155DFC]">Success Rate</p>
                  <div className="size-4 text-[#155DFC]">
                    <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      <path d="M4.66667 7L6.41667 8.75L9.33333 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#155DFC]">97.8%</p>
              </div>

              {/* Avg. Response Time */}
              <div className="bg-[#fef3f2] rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#F54900]">Avg. Response Time</p>
                  <div className="size-4 text-[#F54900]">
                    <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p7f71100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#F54900]">2.3s</p>
              </div>
            </div>
          </div>

          {/* December Summary */}
          <div 
            className="rounded-2xl p-6 shadow-md"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 251, 235) 0%, rgb(254, 243, 199) 100%)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="size-5 text-[#F59E0B]">
                <svg className="block size-full" fill="none" viewBox="0 0 17.5 17.5">
                  <path d={svgPaths.p4e87e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
                </svg>
              </div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#92400E]">December Summary</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#92400E] mb-1">{totalScans}</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#D97706]">Total Scans</p>
              </div>
              <div className="text-center">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#92400E] mb-1">{uniqueBreeds}</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#D97706]">New Breeds</p>
              </div>
              <div className="text-center">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#92400E] mb-1">{avgAccuracy}%</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#D97706]">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#92400E] mb-1">21</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#D97706]">Active Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}