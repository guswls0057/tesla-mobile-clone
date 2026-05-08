import React from 'react';
import Hero from './components/Hero';
import ProductSlider from './components/ProductSlider';
import ExperienceSection from './components/ExperienceSection';
import VideoSection from './components/VideoSection';
import ChargingSection from './components/ChargingSection';
import Footer from './components/Footer';

function App() {
  const modelItems = [
    {
      title: "미드사이즈 SUV",
      modelName: "Model Y",
      bgImage: "/src/assets/images/07.jpg",
      buttons: [
        { text: "주문하기", className: "btn-blue" },
        { text: "자세히 알아보기", className: "btn-white" }
      ]
    },
    {
      title: "유틸리티 트럭",
      modelName: "CYBERTRUCK",
      bgImage: "/src/assets/images/06.jpg",
      buttons: [
        { text: "주문하기", className: "btn-blue" },
        { text: "자세히 알아보기", className: "btn-white" }
      ]
    }
  ];

  const energyItems = [
    {
      title: "Powerwall",
      modelName: "조명은 그대로",
      bgImage: "/src/assets/images/05.jpg",
      buttons: [
        { text: "자세히 알아보기", className: "btn-blue" }
      ]
    },
    {
      title: "Megapack",
      modelName: "초대형 배터리",
      bgImage: "/src/assets/images/04.jpg",
      buttons: [
        { text: "자세히 알아보기", className: "btn-blue" }
      ]
    }
  ];

  return (
    <div className="nanum-gothic-regular">
      <Hero />
      <main>
        <ProductSlider items={modelItems} indicatorsCount={5} id="sec01" />
        <ExperienceSection />
        <VideoSection />
        <ChargingSection />
        <ProductSlider items={energyItems} indicatorsCount={2} id="sec05" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
