import ContactForm from "@/components/contact";
import ExperienceSection from "@/components/experience";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import SkillSection from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Project />
      <ExperienceSection />
      <SkillSection />
      <ContactForm />
    </>
  );
}
