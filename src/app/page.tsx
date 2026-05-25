import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className={styles.pageShell}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <Hero
          name={portfolioData.hero.name}
          role={portfolioData.hero.role}
          description={portfolioData.hero.description}
          image={portfolioData.hero.image}
          socialLinks={portfolioData.hero.socialLinks}
          status={portfolioData.hero.status}
        />

        {/* Two-column Layout */}
        <div className={styles.sections}>
          {/* Left Column */}
          <div>
            <Experience experiences={portfolioData.experience} />
            <Projects projects={portfolioData.projects} />
          </div>

          {/* Right Column */}
          <div>
            <Skills skillGroups={portfolioData.skills} />
            <Education education={portfolioData.education} />
            <Achievements achievements={portfolioData.achievements} />
            <Contact contacts={portfolioData.contact} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
