import { useState } from "react";
import LandingPage from "./components/LandingPage";
import WebsiteLayout from "./components/WebsiteLayout";

export type Page = "home" | "dashboard" | "gallery" | "history" | "classifier" | "profile" | "about";

export interface ClassificationResult {
  type: "Cattle" | "Buffalo";
  breed: string;
  confidence: number;
  timestamp: Date;
  imageUrl: string;
  health: string;
  age: string;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [classificationHistory, setClassificationHistory] = useState<ClassificationResult[]>([
    {
      type: "Cattle",
      breed: "Jersey",
      confidence: 96,
      timestamp: new Date("2024-12-20T14:30:00"),
      imageUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      health: "Excellent",
      age: "3-4 years"
    },
    {
      type: "Buffalo",
      breed: "Murrah",
      confidence: 92,
      timestamp: new Date("2024-12-20T11:15:00"),
      imageUrl: "https://images.unsplash.com/photo-1563460350879-9c3d36c7afe8?w=800&h=600&fit=crop",
      health: "Good",
      age: "4-5 years"
    },
    {
      type: "Cattle",
      breed: "Holstein",
      confidence: 89,
      timestamp: new Date("2024-12-19T16:20:00"),
      imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop",
      health: "Excellent",
      age: "2-3 years"
    },
    {
      type: "Buffalo",
      breed: "Jaffarabadi",
      confidence: 94,
      timestamp: new Date("2024-12-18T10:45:00"),
      imageUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      health: "Good",
      age: "5-6 years"
    },
    {
      type: "Cattle",
      breed: "Gir",
      confidence: 91,
      timestamp: new Date("2024-12-18T09:10:00"),
      imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop",
      health: "Good",
      age: "3-4 years"
    },
    {
      type: "Buffalo",
      breed: "Mehsana",
      confidence: 88,
      timestamp: new Date("2024-12-17T13:30:00"),
      imageUrl: "https://images.unsplash.com/photo-1563460350879-9c3d36c7afe8?w=800&h=600&fit=crop",
      health: "Fair",
      age: "4-6 years"
    }
  ]);

  const handleClassification = (result: ClassificationResult) => {
    setClassificationHistory([result, ...classificationHistory]);
  };

  if (!isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <WebsiteLayout 
      history={classificationHistory}
      onClassify={handleClassification}
      onLogout={() => setIsLoggedIn(false)}
    />
  );
}