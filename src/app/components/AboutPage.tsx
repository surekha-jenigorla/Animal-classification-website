import { Sparkles, CheckCircle, Upload, Image as ImageIcon, Users, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Section 1: About Livestock AI */}
      <div className="bg-gradient-to-r from-[#00a63e] to-[#009689] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl">
            🐄
          </div>
          <div>
            <h1 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl">Livestock AI</h1>
            <p className="font-['Arimo:Regular',sans-serif] text-white/90">Classifier v1.0</p>
          </div>
        </div>
        <p className="font-['Arimo:Regular',sans-serif] text-lg text-white/90 leading-relaxed">
          Livestock AI is an AI-powered platform designed to help farmers and livestock professionals 
          identify cattle and buffalo breeds using images. The system provides fast, accurate, and 
          easy-to-understand breed classification.
        </p>
      </div>

      {/* Section 2: What Livestock AI Does */}
      <div className="bg-white rounded-2xl p-8 shadow-md border border-[#e5e7eb]">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="size-6 text-[#9810fa]" />
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a]">
            What Livestock AI Does
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="size-5 text-[#00a63e] shrink-0 mt-0.5" />
            <p className="font-['Arimo:Regular',sans-serif] text-[#4a5565]">
              Identifies cattle and buffalo breeds using AI
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="size-5 text-[#00a63e] shrink-0 mt-0.5" />
            <p className="font-['Arimo:Regular',sans-serif] text-[#4a5565]">
              Provides instant classification results
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="size-5 text-[#00a63e] shrink-0 mt-0.5" />
            <p className="font-['Arimo:Regular',sans-serif] text-[#4a5565]">
              Stores scan history for future reference
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="size-5 text-[#00a63e] shrink-0 mt-0.5" />
            <p className="font-['Arimo:Regular',sans-serif] text-[#4a5565]">
              Offers access to a detailed breed library
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: How It Works */}
      <div className="bg-white rounded-2xl p-8 shadow-md border border-[#e5e7eb]">
        <div className="flex items-center gap-3 mb-6">
          <ImageIcon className="size-6 text-[#155dfc]" />
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a]">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="size-16 rounded-full bg-gradient-to-br from-[#9810fa] to-[#e60076] flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold text-2xl mx-auto mb-4 shadow-lg">
              1
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-2">
              Upload a clear photo
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Upload a clear photo of the animal
            </p>
          </div>
          <div className="text-center">
            <div className="size-16 rounded-full bg-gradient-to-br from-[#155dfc] to-[#4f39f6] flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold text-2xl mx-auto mb-4 shadow-lg">
              2
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-2">
              AI analyzes features
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              AI analyzes physical features
            </p>
          </div>
          <div className="text-center">
            <div className="size-16 rounded-full bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center text-white font-['Arimo:Bold',sans-serif] font-bold text-2xl mx-auto mb-4 shadow-lg">
              3
            </div>
            <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#0a0a0a] mb-2">
              Get results
            </h3>
            <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182]">
              Breed result with confidence is displayed
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Who It's For */}
      <div className="bg-white rounded-2xl p-8 shadow-md border border-[#e5e7eb]">
        <div className="flex items-center gap-3 mb-6">
          <Users className="size-6 text-[#F54900]" />
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a]">
            Who It's For
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-[#f8f9fa] rounded-xl p-4">
            <div className="size-10 rounded-full bg-gradient-to-br from-[#00a63e] to-[#009689] flex items-center justify-center text-white shrink-0">
              <span className="text-xl">👨‍🌾</span>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">
              Farmers and dairy owners
            </p>
          </div>
          <div className="flex items-center gap-3 bg-[#f8f9fa] rounded-xl p-4">
            <div className="size-10 rounded-full bg-gradient-to-br from-[#155dfc] to-[#4f39f6] flex items-center justify-center text-white shrink-0">
              <span className="text-xl">👨‍⚕️</span>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">
              Veterinarians
            </p>
          </div>
          <div className="flex items-center gap-3 bg-[#f8f9fa] rounded-xl p-4">
            <div className="size-10 rounded-full bg-gradient-to-br from-[#9810fa] to-[#e60076] flex items-center justify-center text-white shrink-0">
              <span className="text-xl">💼</span>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">
              Livestock professionals
            </p>
          </div>
          <div className="flex items-center gap-3 bg-[#f8f9fa] rounded-xl p-4">
            <div className="size-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#F97316] flex items-center justify-center text-white shrink-0">
              <span className="text-xl">🎓</span>
            </div>
            <p className="font-['Arimo:Regular',sans-serif] text-[#0a0a0a]">
              Animal science students
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Data & Privacy */}
      <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-2xl p-8 shadow-md border border-[#e5e7eb]">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="size-6 text-[#00a63e]" />
          <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a]">
            Data & Privacy
          </h2>
        </div>
        <p className="font-['Arimo:Regular',sans-serif] text-lg text-[#4a5565] leading-relaxed">
          Uploaded images and scan data are secure and visible only to the user.
        </p>
      </div>
    </div>
  );
}
