import SectionAboutUs from "../../components/SectionAboutUs/SectionAboutUs";
import SectionHero from "../../components/SectionHero/SectionHero";
import SectionPreview from "../../components/SectionPreview/SectionPreview";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <SectionHero />
      <SectionPreview />
      <SectionAboutUs />
    </main>
  );
}
