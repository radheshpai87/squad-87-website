import Navbar from "../components/navbar";
import Footer from "../components/footer";
import './pages.css';

const Memories = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="page-main">
        <div className="page-content">
          <h1 className="page-title">
            Our Memories
          </h1>
          <p className="page-description">
            Capturing the moments that define our journey together.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Memories;
