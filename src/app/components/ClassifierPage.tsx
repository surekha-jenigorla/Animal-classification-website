import { useState, useRef } from "react";
import { ClassificationResult, Page } from "../App";
import svgPaths from "../../imports/svg-rzqg5co59y";

interface ClassifierPageProps {
  onClassify: (result: ClassificationResult) => void;
  onNavigate: (page: Page) => void;
}

export default function ClassifierPage({ onClassify, onNavigate }: ClassifierPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setShowResult(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      // Random classification for demo
      const isCattle = Math.random() > 0.5;
      const cattleBreeds = ["Holstein", "Jersey", "Gir", "Sahiwal", "Red Sindhi"];
      const buffaloBreeds = ["Murrah", "Jaffarabadi", "Mehsana", "Bhadawari", "Nili-Ravi"];
      const healthStatuses = ["Excellent", "Good", "Fair"];
      
      const newResult: ClassificationResult = {
        type: isCattle ? "Cattle" : "Buffalo",
        breed: isCattle 
          ? cattleBreeds[Math.floor(Math.random() * cattleBreeds.length)]
          : buffaloBreeds[Math.floor(Math.random() * buffaloBreeds.length)],
        confidence: Math.floor(Math.random() * 10) + 90, // 90-99%
        timestamp: new Date(),
        imageUrl: selectedImage,
        health: healthStatuses[Math.floor(Math.random() * healthStatuses.length)],
        age: `${Math.floor(Math.random() * 5) + 2}-${Math.floor(Math.random() * 2) + 4} years`
      };
      
      setResult(newResult);
      setIsAnalyzing(false);
      setShowResult(true);
      onClassify(newResult);
    }, 2500);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setShowResult(false);
    setResult(null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {!showResult ? (
        <>
          {/* Upload Section */}
          <div 
            className="rounded-2xl p-8 shadow-md"
            style={{ backgroundImage: "linear-gradient(134.808deg, rgb(255, 255, 255) 0%, rgb(250, 245, 255) 100%)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 text-[#9810FA]">
                <svg className="block size-full" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p1e919300} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  <path d={svgPaths.p5dda280} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                </svg>
              </div>
              <div>
                <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#0a0a0a]">Upload Animal Photo</h2>
                <p className="font-['Arimo:Regular',sans-serif] text-[#717182]">Take a clear photo showing the full body or side profile</p>
              </div>
            </div>

            {/* Upload Area */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full rounded-2xl border-4 border-dashed border-[#dab2ff] p-12 mb-6 hover:bg-[rgba(218,178,255,0.05)] transition-colors"
            >
              {selectedImage ? (
                <div className="space-y-6">
                  <img src={selectedImage} alt="Selected" className="w-full max-h-96 object-contain rounded-xl" />
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#59168b] text-lg">
                    ✅ Photo Selected - Click to Change
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <div 
                    className="size-24 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }}
                  >
                    <div className="size-12">
                      <svg className="block size-full" fill="none" viewBox="0 0 42 42">
                        <path d={svgPaths.p2e3ef600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                        <path d={svgPaths.p2b260e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                        <path d={svgPaths.p86f7b40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#59168b] text-2xl mb-2">
                      📸 Click to Upload or Drag & Drop
                    </p>
                    <p className="font-['Arimo:Regular',sans-serif] text-[#8200db]">
                      JPG, PNG • Clear lighting recommended • Max 10MB
                    </p>
                  </div>
                </div>
              )}
            </button>

            {/* Analyze Button */}
            {selectedImage && !isAnalyzing && (
              <button
                onClick={handleAnalyze}
                className="w-full bg-gradient-to-r from-[#9810fa] to-[#e60076] h-16 rounded-xl font-['Arimo:Bold',sans-serif] font-bold text-white text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                🚀 Analyze Now
              </button>
            )}

            {/* Analyzing State */}
            {isAnalyzing && (
              <div className="text-center space-y-4">
                <div className="inline-block animate-spin size-16 border-4 border-[#9810fa] border-t-transparent rounded-full" />
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#59168b] text-xl">
                  🔄 Analyzing Image...
                </p>
                <p className="font-['Arimo:Regular',sans-serif] text-[#8200db]">
                  Our AI is processing your image
                </p>
              </div>
            )}
          </div>

          {/* Photography Tips */}
          <div className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 text-[#016630]">
                <svg className="block size-full" fill="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p3924400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  <path d="M14 18.6667V14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                  <path d="M14 9.33333H14.0117" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                </svg>
              </div>
              <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#016630]">Photography Tips for Best Results</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📷</span>
                <div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#016630] mb-1">Natural Lighting</p>
                  <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#059142]">Use natural daylight for best results</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#016630] mb-1">Full Body Shot</p>
                  <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#059142]">Show full body or clear side profile</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#016630] mb-1">Distinctive Features</p>
                  <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#059142]">Focus on horns, face, and body</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📏</span>
                <div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#016630] mb-1">Safe Distance</p>
                  <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#059142]">Maintain safe distance from animal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#016630] mb-1">Clear Background</p>
                  <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#059142]">Ensure background is uncluttered</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#016630] mb-1">High Resolution</p>
                  <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#059142]">Use high quality camera settings</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : result && (
        <>
          {/* Results Display */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`size-16 rounded-2xl ${
                  result.type === "Cattle" ? "bg-[#F54900]" : "bg-[#155DFC]"
                } flex items-center justify-center text-4xl shadow-lg`}>
                  {result.type === "Cattle" ? "🐄" : "🐃"}
                </div>
                <div>
                  <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-3xl text-[#0a0a0a] mb-1">
                    {result.type} Identified!
                  </h2>
                  <p className="font-['Arimo:Regular',sans-serif] text-[#717182]">
                    Classification completed with {result.confidence}% confidence
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#f3f3f5] px-6 py-3 rounded-xl hover:bg-[#e5e7eb] transition-colors font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a]"
              >
                🔄 Scan Another
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={result.imageUrl} alt="Analyzed animal" className="w-full h-96 object-cover" />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-xl shadow-lg">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-[#00a63e]">
                    ✓ {result.confidence}%
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                {/* Breed Info */}
                <div>
                  <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#717182] mb-2">Breed Classification</p>
                  <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-4xl text-[#0a0a0a] mb-2">{result.breed}</h3>
                  <span className={`inline-block px-4 py-2 rounded-lg font-['Arimo:Bold',sans-serif] font-bold ${
                    result.type === "Cattle" ? "bg-[#F54900]" : "bg-[#155DFC]"
                  } text-white shadow-md`}>
                    {result.type}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#f0fdf4] rounded-xl p-4">
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#16C560] mb-2">Confidence</p>
                    <p className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-[#059142]">{result.confidence}%</p>
                  </div>

                  <div className="bg-[#eff6ff] rounded-xl p-4">
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#3B82F6] mb-2">Health</p>
                    <p className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#1E40AF]">{result.health}</p>
                  </div>

                  <div className="bg-[#fef3f2] rounded-xl p-4">
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#F59E0B] mb-2">Age</p>
                    <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#92400E]">{result.age}</p>
                  </div>
                </div>

                {/* Confidence Breakdown */}
                <div className="bg-[#f8f9fa] rounded-xl p-6">
                  <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a] mb-4">Analysis Breakdown</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#364153]">Overall Confidence</p>
                        <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#00a63e]">{result.confidence}%</p>
                      </div>
                      <div className="bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#00a63e] to-[#16C560] h-full rounded-full transition-all duration-500"
                          style={{ width: `${result.confidence}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#364153]">Feature Detection</p>
                        <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#155DFC]">{Math.max(85, result.confidence - 5)}%</p>
                      </div>
                      <div className="bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#155DFC] to-[#3B82F6] h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(85, result.confidence - 5)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#364153]">Image Quality</p>
                        <p className="font-['Arimo:Bold',sans-serif] font-bold text-sm text-[#9810FA]">{Math.max(80, result.confidence - 10)}%</p>
                      </div>
                      <div className="bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#9810FA] to-[#ad46ff] h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(80, result.confidence - 10)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={() => onNavigate("history")}
                    className="flex-1 bg-white border-2 border-[#00a63e] px-6 py-4 rounded-xl font-['Arimo:Bold',sans-serif] font-bold text-[#00a63e] hover:bg-[#f0fdf4] transition-colors shadow-md"
                  >
                    📊 View History
                  </button>
                  <button
                    onClick={() => onNavigate("gallery")}
                    className="flex-1 bg-white border-2 border-[#9810fa] px-6 py-4 rounded-xl font-['Arimo:Bold',sans-serif] font-bold text-[#9810fa] hover:bg-[#faf5ff] transition-colors shadow-md"
                  >
                    📚 Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}