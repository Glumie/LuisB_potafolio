import '../i18n';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutComponent from '../components/AboutComponent/AboutComponent';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ExperienceTimeline from '../components/ExperienceTimeline/ExperienceTimeline';
import ContactForm from '../components/ContactForm/ContactForm';

function Inicio() {
  return (
    <Layout>
      <HeroSection />
      <AboutComponent />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactForm />
    </Layout>
  );
}

export default Inicio;
