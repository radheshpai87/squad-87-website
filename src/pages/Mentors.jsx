import Navbar from "../components/navbar";
import Footer from "../components/footer";
import './pages.css';

const Mentors = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="page-main">
        <div className="page-content">
          <h1 className="page-title">
            Our Mentors
          </h1>
          <p className="page-description">
            Meet the experienced professionals who guide and inspire Squad 87.
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mentors;
