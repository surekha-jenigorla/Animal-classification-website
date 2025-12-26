import { useState } from "react";
import svgPaths from "../../imports/svg-w73uiwek07";

interface BreedInfo {
  name: string;
  type: "Cattle" | "Buffalo";
  image: string;
  milkFat: string;
  liters: string;
  color: string;
  traits: string[];
}

const breedsData: BreedInfo[] = [
  {
    name: "Jersey",
    type: "Cattle",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=500&fit=crop",
    milkFat: "4.5-5.5%",
    liters: "18-22 liters/day",
    color: "Light brown to fawn",
    traits: ["High butterfat content", "Small to medium size", "Heat tolerant", "Gentle temperament"]
  },
  {
    name: "Holstein",
    type: "Cattle",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=500&fit=crop",
    milkFat: "3.5-4%",
    liters: "25-30 liters/day",
    color: "Black and white",
    traits: ["Highest milk producer", "Large frame", "Requires good feed", "Cold climate suited"]
  },
  {
    name: "Gir",
    type: "Cattle",
    image: "https://images.unsplash.com/photo-1544011024-1920b2c2a2ba?w=800&h=500&fit=crop",
    milkFat: "4.5-5%",
    liters: "8-12 liters/day",
    color: "Red to white with spots",
    traits: ["Indigenous breed", "Disease resistant", "Heat tolerant", "Low maintenance"]
  },
  {
    name: "Murrah",
    type: "Buffalo",
    image: "https://images.unsplash.com/photo-1563460350879-9c3d36c7afe8?w=800&h=500&fit=crop",
    milkFat: "7-8%",
    liters: "12-16 liters/day",
    color: "Jet black",
    traits: ["Highest milk fat", "Curved horns", "Suitable for cheese", "Hardy nature"]
  },
  {
    name: "Jaffarabadi",
    type: "Buffalo",
    image: "https://images.unsplash.com/photo-1609127095746-d92fff76648c?w=800&h=500&fit=crop",
    milkFat: "6.5-7.5%",
    liters: "10-15 liters/day",
    color: "Black",
    traits: ["Large body size", "Heavy milk yield", "Coiled horns", "Productive"]
  },
  {
    name: "Sahiwal",
    type: "Cattle",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=500&fit=crop",
    milkFat: "4.5-5%",
    liters: "10-16 liters/day",
    color: "Reddish brown",
    traits: ["Heat resistant", "Tick resistant", "Good temperament", "Dual purpose"]
  }
];

export default function GalleryPage() {
  const [selectedTab, setSelectedTab] = useState<"all" | "Cattle" | "Buffalo">("all");

  const filteredBreeds = selectedTab === "all" 
    ? breedsData 
    : breedsData.filter(b => b.type === selectedTab);

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl p-2 shadow-md inline-flex gap-2">
        <button
          onClick={() => setSelectedTab("all")}
          className={`px-6 py-3 rounded-xl font-['Arimo:Bold',sans-serif] font-bold transition-all ${
            selectedTab === "all"
              ? "bg-gradient-to-r from-[#9810fa] to-[#e60076] text-white shadow-md"
              : "text-[#717182] hover:bg-[#f3f3f5]"
          }`}
        >
          🐮 All Breeds
        </button>
        <button
          onClick={() => setSelectedTab("Cattle")}
          className={`px-6 py-3 rounded-xl font-['Arimo:Bold',sans-serif] font-bold transition-all ${
            selectedTab === "Cattle"
              ? "bg-[#F54900] text-white shadow-md"
              : "text-[#717182] hover:bg-[#f3f3f5]"
          }`}
        >
          🐄 Cattle Breeds
        </button>
        <button
          onClick={() => setSelectedTab("Buffalo")}
          className={`px-6 py-3 rounded-xl font-['Arimo:Bold',sans-serif] font-bold transition-all ${
            selectedTab === "Buffalo"
              ? "bg-[#155DFC] text-white shadow-md"
              : "text-[#717182] hover:bg-[#f3f3f5]"
          }`}
        >
          🐃 Buffalo Breeds
        </button>
      </div>

      {/* Breed Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBreeds.map((breed, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            {/* Image */}
            <div className="relative h-56">
              <img src={breed.image} alt={breed.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`${
                  breed.type === "Cattle" ? "bg-[#F54900]" : "bg-[#155DFC]"
                } text-white px-4 py-2 rounded-xl font-['Arimo:Bold',sans-serif] font-bold shadow-lg`}>
                  {breed.type}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-2xl text-white drop-shadow-lg mb-1">
                  {breed.name}
                </h3>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-white/90 drop-shadow">{breed.type} breed</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gradient-to-br from-[#fff7ed] to-[#fed7aa] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="size-3.5 text-[#F59E0B]">
                      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p1aefba80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      </svg>
                    </div>
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#D97706]">Milk Fat</p>
                  </div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-base text-[#92400E]">{breed.milkFat}</p>
                </div>

                <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="size-3.5 text-[#3B82F6]">
                      <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p2ce7bce0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                      </svg>
                    </div>
                    <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#2563EB]">Daily Yield</p>
                  </div>
                  <p className="font-['Arimo:Bold',sans-serif] font-bold text-base text-[#1E40AF]">{breed.liters}</p>
                </div>
              </div>

              {/* Color */}
              <div className="mb-4 bg-[#f8f9fa] rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <div className="size-3.5">
                    <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                      <circle cx="7" cy="7" r="5.25" stroke="#717182" strokeWidth="1.16667" />
                    </svg>
                  </div>
                  <p className="font-['Arimo:Regular',sans-serif] text-xs text-[#717182]">Color: <span className="font-['Arimo:Bold',sans-serif] font-bold text-[#0a0a0a]">{breed.color}</span></p>
                </div>
              </div>

              {/* Key Traits */}
              <div>
                <p className="font-['Arimo:Bold',sans-serif] font-bold text-xs text-[#717182] uppercase tracking-wide mb-2">Key Traits</p>
                <div className="space-y-1.5">
                  {breed.traits.map((trait, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="size-3.5 text-[#16C560] mt-0.5 shrink-0">
                        <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33334 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                        </svg>
                      </div>
                      <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#364153]">{trait}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Comparison */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-xl text-[#0a0a0a] mb-6">Quick Comparison</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0">
                🐄
              </div>
              <div>
                <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#059142] mb-2">Cattle</h4>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#364153]">
                  Smaller milk yield, higher fat content. Suited for dairy farming. Best suited for temperate climates.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0">
                🐃
              </div>
              <div>
                <h4 className="font-['Arimo:Bold',sans-serif] font-bold text-lg text-[#1E40AF] mb-2">Buffalo</h4>
                <p className="font-['Arimo:Regular',sans-serif] text-sm text-[#364153]">
                  Higher milk yield, very high fat content. Best suited for cheese and butter. Heat and disease resistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
