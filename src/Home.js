// App.jsx
import { motion } from "framer-motion";
import HeroModel from "./components/HeroModel";
import ProjectCard from "./components/ProjectCard";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.appContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroTitle}
          >
            Hi, I'm Your Name
          </motion.h1>
          <p className={styles.heroSubtitle}>
            A passionate developer creating awesome things
          </p>
        </div>
        <div className={styles.heroModelContainer}>
          <HeroModel />
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          <ProjectCard
            title="Project 1"
            description="An amazing project that showcases my skills"
          />
          <ProjectCard
            title="Project 2"
            description="Another impressive creation of mine"
          />
        </div>
      </section>
    </div>
  );
}
