import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExperimentSection from '@/components/ExperimentSection';
import QuizSection from '@/components/QuizSection';
import SimulatorSection from '@/components/SimulatorSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExperimentSection />
        <QuizSection />
        <SimulatorSection />
      </main>
      <Footer />
    </div>
  );
}
