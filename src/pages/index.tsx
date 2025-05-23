import Image from 'next/image';
import Greeting from '@/components/pages/main/Greeting/Greeting';
import Skills from '@/components/pages/main/Skills/Skills';
import Projects from '@/components/pages/main/Projects/Projects';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import { skills } from '../../storage/skills';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="normalize-container">
          <Greeting />
        </div>

        <div className="normalize-section normalize-container">
          <Skills skills={skills} />
        </div>

        <div className="normalize-section normalize-container">
          <Projects />
        </div>
      </main>

      <div className="normalize-container">
        <Footer />
      </div>
    </>
  );
}
