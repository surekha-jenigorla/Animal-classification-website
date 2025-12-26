import { Mail, Settings, LogOut, Trophy, Zap, Target, User } from "lucide-react";

interface ProfilePageProps {
  onLogout: () => void;
}

export default function ProfilePage({ onLogout }: ProfilePageProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header */}
      <div 
        className="rounded-2xl p-8 shadow-xl"
        style={{ background: "linear-gradient(135deg, #00a63e 0%, #009689 100%)" }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="size-24 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-4xl text-[#00a63e]">F</span>
            </div>
            <div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-white mb-2">Farmer</h3>
              <p className="font-['Arimo:Regular',sans-serif] text-lg text-white/90 mb-3">Premium Member</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <Mail className="size-4 text-white" />
                  <span className="font-['Arimo:Regular',sans-serif] text-sm text-white">farmer@example.com</span>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-['Arimo:Bold',sans-serif] font-bold text-white transition-colors backdrop-blur-sm">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div>
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0a0a0a] mb-4">Your Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-3">
              <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">Scans Completed</p>
              <div className="size-10 rounded-lg bg-[#155dfc]/10 flex items-center justify-center">
                <Zap className="size-5 text-[#155dfc]" />
              </div>
            </div>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#155dfc]">47</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-3">
              <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">Avg Accuracy</p>
              <div className="size-10 rounded-lg bg-[#00a63e]/10 flex items-center justify-center">
                <Target className="size-5 text-[#00a63e]" />
              </div>
            </div>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#00a63e]">94%</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-3">
              <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">Breeds Found</p>
              <div className="size-10 rounded-lg bg-[#9810fa]/10 flex items-center justify-center">
                <Trophy className="size-5 text-[#9810fa]" />
              </div>
            </div>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#9810fa]">12</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-3">
              <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">Days Active</p>
              <div className="size-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
                <svg className="size-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#F59E0B]">30</p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0a0a0a] mb-4">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#fff7ed] to-[#fed7aa] rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="size-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Trophy className="size-7 text-[#F59E0B]" />
              </div>
              <div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#92400E]">First Scan</p>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#D97706]">Unlocked</p>
              </div>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#92400E]">Completed your first classification</p>
          </div>

          <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="size-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Zap className="size-7 text-[#3B82F6]" />
              </div>
              <div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#1E40AF]">50 Scans</p>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#2563EB]">In Progress</p>
              </div>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#1E40AF]">Reached 50 classifications milestone</p>
          </div>

          <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="size-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Target className="size-7 text-[#16C560]" />
              </div>
              <div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#059142]">Expert</p>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#16C560]">Unlocked</p>
              </div>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#059142]">Achieved 95%+ accuracy rate</p>
          </div>
        </div>
      </div>

      {/* Settings & Preferences */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-4">Account Settings</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f8f9fa] transition-colors text-left">
              <Settings className="size-5 text-[#717182]" />
              <div className="flex-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">General Settings</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Update account preferences</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f8f9fa] transition-colors text-left">
              <User className="size-5 text-[#717182]" />
              <div className="flex-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">Edit Profile</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Update profile information</p>
              </div>
            </button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-[#e5e7eb]">
          <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-4">Account Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#f0fdf4] hover:bg-[#dcfce7] transition-colors text-left">
              <div className="size-5 text-[#00a63e]">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#00a63e]">Change Password</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#059142]">Update your password</p>
              </div>
            </button>

            {/* Logout Button - Prominent and Functional */}
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-4 rounded-lg bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C] transition-all text-left shadow-md hover:shadow-lg"
            >
              <LogOut className="size-5 text-white" />
              <div className="flex-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-white">Logout</p>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-white/90">Sign out from your account</p>
              </div>
            </button>
          </div>

          {/* App Info */}
          <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🐄</div>
              <div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-1">Livestock Classifier</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182] mb-1">Version 1.0.0</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">AI-Powered Animal Identification System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}