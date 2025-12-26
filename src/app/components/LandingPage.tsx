import { useState } from "react";
import { Sparkles, BarChart3, Image, Clock, Zap } from "lucide-react";

interface LandingPageProps {
  onLogin: () => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-white to-[#f8f9fa]">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center shadow-lg">
              <span className="text-2xl">🐄</span>
            </div>
            <div>
              <h1 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0d542b]">Livestock AI</h1>
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Intelligent Classification</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Product Introduction */}
          <div className="space-y-8 pt-8">
            {/* Hero Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#00a63e]/10 px-4 py-2 rounded-full border border-[#00a63e]/20">
                <Sparkles className="size-4 text-[#00a63e]" />
                <span className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#00a63e]">AI-Powered Technology</span>
              </div>
              
              <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-5xl text-[#0a0a0a] leading-tight">
                Identify Livestock Breeds with{" "}
                <span className="bg-gradient-to-r from-[#00a63e] to-[#009689] bg-clip-text text-transparent">
                  AI Precision
                </span>
              </h2>
              
              <p className="font-['Arimo:Regular',sans-serif] text-xl text-[#717182] leading-relaxed">
                Advanced artificial intelligence for instant cattle and buffalo breed identification. 
                Get detailed insights, health assessments, and comprehensive breed information in seconds.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a]">
                Why Choose Livestock AI?
              </h3>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#e5e7eb]">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-[#155dfc] to-[#4f39f6] flex items-center justify-center shrink-0">
                    <Zap className="size-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-1">
                      Instant Classification
                    </h4>
                    <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                      Get results in under 3 seconds with 95%+ accuracy using deep learning models
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#e5e7eb]">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-[#9810fa] to-[#e60076] flex items-center justify-center shrink-0">
                    <BarChart3 className="size-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-1">
                      Comprehensive Analytics
                    </h4>
                    <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                      Track scan history, view trends, and access detailed breed information
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#e5e7eb]">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center shrink-0">
                    <Image className="size-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-1">
                      Breed Library
                    </h4>
                    <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                      Access detailed information on 50+ cattle and buffalo breeds
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#e5e7eb]">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-[#F54900] to-[#ff8a50] flex items-center justify-center shrink-0">
                    <Clock className="size-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-1">
                      History & Tracking
                    </h4>
                    <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
                      Maintain records of all scans with timestamps and detailed results
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#00a63e] mb-1">95%</p>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#155dfc] mb-1">50+</p>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">Breeds</p>
              </div>
              <div className="text-center">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#9810fa] mb-1">10k+</p>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">Users</p>
              </div>
            </div>
          </div>

          {/* Right Side - Authentication Card */}
          <div className="lg:sticky lg:top-8 pt-8">
            <div className="bg-white rounded-2xl shadow-xl border border-[#e5e7eb] p-8">
              <div className="text-center mb-8">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a] mb-2">
                  {isSignUp ? "Create Account" : "Welcome Back"}
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-[#717182]">
                  {isSignUp ? "Join thousands of farmers using AI classification" : "Sign in to continue to Livestock AI"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name (Sign Up Only) */}
                {isSignUp && (
                  <div>
                    <label className="block font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-xl focus:border-[#00a63e] focus:outline-none font-['Arimo:Regular',sans-serif] transition-colors"
                      required
                    />
                  </div>
                )}

                {/* Email/Phone */}
                <div>
                  <label className="block font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a] mb-2">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email or phone number"
                    className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-xl focus:border-[#00a63e] focus:outline-none font-['Arimo:Regular',sans-serif] transition-colors"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-xl focus:border-[#00a63e] focus:outline-none font-['Arimo:Regular',sans-serif] transition-colors"
                    required
                  />
                </div>

                {/* Confirm Password (Sign Up Only) */}
                {isSignUp && (
                  <div>
                    <label className="block font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a] mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Re-enter password"
                      className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-xl focus:border-[#00a63e] focus:outline-none font-['Arimo:Regular',sans-serif] transition-colors"
                      required
                    />
                  </div>
                )}

                {/* Forgot Password (Login Only) */}
                {!isSignUp && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#00a63e] hover:text-[#009689] transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00a63e] to-[#009689] text-white py-4 rounded-xl font-['Arimo:Bold',sans-serif] font-bold text-lg hover:shadow-lg transition-all shadow-md"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#e5e7eb]" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white font-['Arimo:Regular',sans-serif] text-[#717182]">
                      or
                    </span>
                  </div>
                </div>

                {/* Toggle Sign Up/Login */}
                <div className="text-center">
                  <p className="font-['Arimo:Regular',sans-serif] text-[#717182]">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="font-['Arimo:Bold',sans-serif] font-bold text-[#00a63e] hover:text-[#009689] transition-colors"
                    >
                      {isSignUp ? "Sign in" : "Sign up"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}