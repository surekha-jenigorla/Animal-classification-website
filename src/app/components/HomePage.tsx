import { Page } from "../App";
import { Sparkles, ScanLine, History, Image, BarChart3, Zap, Clock, TrendingUp } from "lucide-react";

interface HomePageProps {
  userName: string;
  onNavigate: (page: Page) => void;
}

export default function HomePage({ userName, onNavigate }: HomePageProps) {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#00a63e] to-[#009689] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-['Arimo:Bold',sans-serif] font-bold text-4xl mb-3">
              Welcome back, {userName}! 👋
            </h1>
            <p className="font-['Arimo:Regular',sans-serif] text-lg text-white/90 mb-6 max-w-2xl">
              Your AI-powered livestock classification system is ready. Upload photos to identify breeds, 
              track your scan history, and explore our comprehensive breed library.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Sparkles className="size-5" />
                <span className="font-['Arimo:Bold',sans-serif] font-bold">AI-Powered</span>
              </div>
            </div>
          </div>
          <div className="size-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl">
            🐄
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a] mb-6">
          Quick Actions
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Classify Animal */}
          <button
            onClick={() => onNavigate("classifier")}
            className="group bg-gradient-to-br from-[#9810fa] to-[#e60076] rounded-2xl p-6 text-left hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="size-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ScanLine className="size-7 text-white" />
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-white mb-2">
              Classify Animal
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-white/90 text-sm mb-4">
              Upload a photo to instantly identify breed with AI precision
            </p>
            <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-sm">Start Classification</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          {/* View Scan History */}
          <button
            onClick={() => onNavigate("history")}
            className="group bg-gradient-to-br from-[#155dfc] to-[#4f39f6] rounded-2xl p-6 text-left hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="size-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <History className="size-7 text-white" />
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-white mb-2">
              View Scan History
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-white/90 text-sm mb-4">
              Access all your previous scans and classification results
            </p>
            <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-sm">View All Scans</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          {/* Browse Breeds */}
          <button
            onClick={() => onNavigate("gallery")}
            className="group bg-gradient-to-br from-[#00a63e] to-[#009689] rounded-2xl p-6 text-left hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="size-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Image className="size-7 text-white" />
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-white mb-2">
              Browse Breeds
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-white/90 text-sm mb-4">
              Explore detailed information on 50+ cattle and buffalo breeds
            </p>
            <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-sm">Explore Gallery</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        </div>
      </div>

      {/* Features Overview */}
      <div>
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a] mb-6">
          What You Can Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="size-12 rounded-lg bg-gradient-to-br from-[#155dfc]/10 to-[#4f39f6]/10 flex items-center justify-center mb-4">
              <Zap className="size-6 text-[#155dfc]" />
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-2">
              Instant Results
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Get breed identification in under 3 seconds with our advanced AI model
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="size-12 rounded-lg bg-gradient-to-br from-[#00a63e]/10 to-[#009689]/10 flex items-center justify-center mb-4">
              <BarChart3 className="size-6 text-[#00a63e]" />
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-2">
              Track Analytics
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Monitor scan trends, accuracy rates, and classification patterns
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="size-12 rounded-lg bg-gradient-to-br from-[#9810fa]/10 to-[#e60076]/10 flex items-center justify-center mb-4">
              <Image className="size-6 text-[#9810fa]" />
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-2">
              Breed Library
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Access comprehensive information on cattle and buffalo breeds
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="size-12 rounded-lg bg-gradient-to-br from-[#F54900]/10 to-[#ff8a50]/10 flex items-center justify-center mb-4">
              <Clock className="size-6 text-[#F54900]" />
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-2">
              History Tracking
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Maintain detailed records of all your scans with timestamps
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-[#f8f9fa] to-[#f0fdf4] rounded-2xl p-8 border border-[#e5e7eb]">
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a] mb-6 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="size-16 rounded-full bg-gradient-to-br from-[#9810fa] to-[#e60076] flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold text-2xl mx-auto mb-4 shadow-lg">
              1
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-2">
              Upload Photo
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Take or upload a clear photo of the cattle or buffalo
            </p>
          </div>

          <div className="text-center">
            <div className="size-16 rounded-full bg-gradient-to-br from-[#155dfc] to-[#4f39f6] flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold text-2xl mx-auto mb-4 shadow-lg">
              2
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-2">
              AI Analysis
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Our AI model analyzes features and identifies the breed
            </p>
          </div>

          <div className="text-center">
            <div className="size-16 rounded-full bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold text-2xl mx-auto mb-4 shadow-lg">
              3
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-2">
              Get Results
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Receive detailed breed info, confidence score, and insights
            </p>
          </div>
        </div>
      </div>

      {/* Getting Started Tips */}
      <div className="bg-white rounded-2xl p-8 shadow-md border border-[#e5e7eb]">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-lg bg-gradient-to-br from-[#F59E0B]/10 to-[#F59E0B]/20 flex items-center justify-center shrink-0">
            <TrendingUp className="size-6 text-[#F59E0B]" />
          </div>
          <div className="flex-1">
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0a0a0a] mb-3">
              Tips for Best Results
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <span className="text-[#00a63e] mt-0.5">✓</span>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                  Use natural daylight for clear photos
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#00a63e] mt-0.5">✓</span>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                  Capture full body or clear side profile
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#00a63e] mt-0.5">✓</span>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                  Focus on distinctive features like horns
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#00a63e] mt-0.5">✓</span>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                  Ensure background is uncluttered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}