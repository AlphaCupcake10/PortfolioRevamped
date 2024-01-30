import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeaturedSection from "../components/ProjectsPage/FeaturedSection";
import ProjectsList from "../components/ProjectsPage/ProjectsList";

export default function ProjectsPage() {

  return (
    <>
      <Navbar />
      <FeaturedSection />
      <ProjectsList />
      <Footer />
    </>
  )
}