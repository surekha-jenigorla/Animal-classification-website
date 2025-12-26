import { X, Mail, Settings, Bell, Globe, User, LogOut, Trophy, Zap, Target } from "lucide-react";

interface ProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function ProfilePanel({ isOpen, onClose, onLogout }: ProfilePanelProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div 
          className="p-6 border-b border-[#e5e7eb]"
          style={{ background: "linear-gradient(135deg, #00a63e 0%, #009689 100%)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-white">Profile</h2>
            <button 
              onClick={onClose}
              className="size-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="size-5 text-white" />
            </button>
          </div>

          {/* Profile Overview */}
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#00a63e]">F</span>
            </div>
            <div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-white mb-1">Farmer</h3>
              <p className="font-['Arimo:Regular',sans-serif] text-sm text-white/90">farmer@example.com</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6 bg-[#f8f9fa]">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#717182] mb-4">Your Statistics</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e5e7eb]">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#155DFC] mb-1">47</p>
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Scans Completed</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e5e7eb]">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#00a63e] mb-1">94%</p>
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Avg Accuracy</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e5e7eb]">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#9810FA] mb-1">12</p>
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Breeds Found</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e5e7eb]">
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#F59E0B] mb-1">30</p>
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Days Active</p>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="p-6 border-b border-[#e5e7eb]">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#717182] mb-4">Account Information</p>
          <div className="flex items-center gap-3 bg-[#f8f9fa] rounded-xl p-4">
            <div className="size-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Mail className="size-5 text-[#717182]" />
            </div>
            <div className="flex-1">
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182] mb-1">Email</p>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#0a0a0a]">farmer@example.com</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="p-6 border-b border-[#e5e7eb]">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#717182] mb-4">Achievements</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#fff7ed] to-[#fed7aa] rounded-xl p-4">
              <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Trophy className="size-6 text-[#F59E0B]" />
              </div>
              <div className="flex-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#92400E] mb-1">First Scan</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#D97706]">Completed your first classification</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gradient-to-r from-[#eff6ff] to-[#dbeafe] rounded-xl p-4">
              <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Zap className="size-6 text-[#3B82F6]" />
              </div>
              <div className="flex-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#1E40AF] mb-1">50 Scans</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#2563EB]">Reached 50 classifications milestone</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7] rounded-xl p-4">
              <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Target className="size-6 text-[#16C560]" />
              </div>
              <div className="flex-1">
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#059142] mb-1">Expert</p>
                <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#16C560]">Achieved 95%+ accuracy rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="p-6 space-y-2">
          <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#717182] mb-4">Settings</p>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left">
            <Settings className="size-5 text-[#717182]" />
            <span className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">Account Settings</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left">
            <Bell className="size-5 text-[#717182]" />
            <span className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">Notifications</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left">
            <Globe className="size-5 text-[#717182]" />
            <span className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">Language Settings</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left">
            <User className="size-5 text-[#717182]" />
            <span className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">Edit Profile</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#fef2f2] transition-colors text-left" onClick={onLogout}>
            <LogOut className="size-5 text-[#EF4444]" />
            <span className="font-['Arimo:Regular',sans-serif] text-[#EF4444]">Logout</span>
          </button>
        </div>

        {/* App Info Footer */}
        <div className="p-6 bg-[#f8f9fa] border-t border-[#e5e7eb]">
          <div className="flex items-start gap-3 mb-3">
            <div className="text-3xl">🐄</div>
            <div>
              <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-1">Livestock Classifier</p>
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182] mb-2">Version 1.0.0</p>
              <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">AI-Powered Animal Identification System</p>
            </div>
          </div>
          <div className="text-center pt-3 border-t border-[#e5e7eb]">
            <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">© 2024 Livestock AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}