import { ClassificationResult } from "../App";
import svgPaths from "../../imports/svg-lt8fhfuuk9";

interface HistoryPageProps {
  history: ClassificationResult[];
}

export default function HistoryPage({ history }: HistoryPageProps) {
  const totalScans = history.length;
  const cattleScans = history.filter(h => h.type === "Cattle").length;
  const buffaloScans = history.filter(h => h.type === "Buffalo").length;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          className="rounded-2xl p-6 shadow-md"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(243, 244, 246) 0%, rgb(229, 231, 235) 100%)" }}
        >
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#0a0a0a] mb-1">{totalScans}</h3>
          <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#4a5565]">Total Scans</p>
        </div>

        <div 
          className="rounded-2xl p-6 shadow-md"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 237, 213) 0%, rgb(254, 215, 170) 100%)" }}
        >
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#C13800] mb-1">{cattleScans}</h3>
          <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#EA580C]">Cattle</p>
        </div>

        <div 
          className="rounded-2xl p-6 shadow-md"
          style={{ backgroundImage: "linear-gradient(135deg, rgb(219, 234, 254) 0%, rgb(191, 219, 254) 100%)" }}
        >
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#1E40AF] mb-1">{buffaloScans}</h3>
          <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#2563EB]">Buffalo</p>
        </div>
      </div>

      {/* Recent Scans Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0a0a0a]">Recent Scans</h2>
      </div>

      {/* Scan History List */}
      <div className="space-y-4">
        {history.map((scan, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className={`size-16 rounded-2xl ${
                scan.type === "Cattle" ? "bg-[#F54900]" : "bg-[#155DFC]"
              } flex items-center justify-center text-white shrink-0 shadow-md`}>
                <div className="size-8">
                  <svg className="block size-full" fill="none" viewBox="0 0 28 28">
                    <path d={scan.type === "Cattle" ? svgPaths.p36af5000 : svgPaths.p1a5bf200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0a0a0a] mb-1">{scan.breed}</h3>
                    <div className="flex items-center gap-2 text-sm text-[#717182]">
                      <div className="size-4">
                        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p3924400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d="M7 3.5V7L9.33333 8.16667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        </svg>
                      </div>
                      <span className="font-['Arimo:Regular',sans-serif]">{formatDate(scan.timestamp)}</span>
                    </div>
                  </div>

                  <span className={`px-4 py-2 rounded-lg font-['Arimo:Bold',sans-serif] font-bold ${
                    scan.type === "Cattle" 
                      ? "bg-[#F54900] text-white" 
                      : "bg-[#155DFC] text-white"
                  } shadow-md`}>
                    {scan.type}
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-[#f0fdf4] rounded-xl p-3">
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#16C560] mb-1">Confidence</p>
                    <p className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#059142]">{scan.confidence}%</p>
                  </div>

                  <div className="bg-[#eff6ff] rounded-xl p-3">
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#3B82F6] mb-1">Health</p>
                    <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#1E40AF]">{scan.health}</p>
                  </div>

                  <div className="bg-[#fef3f2] rounded-xl p-3">
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#F59E0B] mb-1">Age</p>
                    <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#92400E]">{scan.age}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#f3f3f5] text-[#0a0a0a] rounded-lg hover:bg-[#e5e7eb] transition-colors font-['Arimo:Regular',sans-serif] text-sm">
                    <div className="size-4">
                      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p305dac80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      </svg>
                    </div>
                    Details
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 bg-[#f3f3f5] text-[#F54900] rounded-lg hover:bg-[#ffede5] transition-colors font-['Arimo:Regular',sans-serif] text-sm">
                    <div className="size-4">
                      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p3cd31380} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        <path d={svgPaths.p1bbe3600} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      </svg>
                    </div>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {history.length === 0 && (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <p className="text-6xl mb-4">📊</p>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0a0a0a] mb-2">No scans yet</h3>
            <p className="font-['Arimo:Regular',sans-serif] text-[#717182]">Start classifying your livestock to see history here</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {history.length > 0 && (
        <div className="text-center pt-4">
          <button className="bg-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow font-['Arimo:Bold',sans-serif] font-bold text-[#155DFC]">
            Load More Results
          </button>
        </div>
      )}
    </div>
  );
}