import Navbar from "../components/navbar";
import Footer from "../components/footer";
import './pages.css';

const Projects = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="page-main">
        <div className="page-content">
          <h1 className="page-title">
            Our Projects
          </h1>
          <p className="page-description">
            Innovative solutions and creative works by Squad 87 members.
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
