import Hero from "../components/home/hero";
import ImpactStats from "../components/home/impactstats";
import CaaSPackages from "../components/home/caaspackages";
import Features from "../components/home/features";
import EcosistemaBeland from "../components/home/ecosistemabeland";
import VideoCarousel from "../components/home/videocarousel";


  export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. Inicio */}
      <Hero />
      
      {/* 2. Impacto */}
      <ImpactStats />
      
      {/* 3. La experiencia Beland (Ahora aquí, después de impacto) */}
      <EcosistemaBeland /> 
      
      {/* 4. Modelos y Planes */}
      <CaaSPackages /> 
      
      {/* 5. Características adicionales */}
      <Features /> 
      
      {/* 6. Carrusel de Videos */}
      <VideoCarousel />

      {/* <CTA /> */}
    </main>
  );
}