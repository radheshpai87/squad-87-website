import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Mentors = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8" 
              style={{ fontFamily: '"Playfair Display", serif', color: '#F2572D' }}>
            Our Mentors
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto" 
             style={{ fontFamily: 'Manrope, sans-serif' }}>
            Meet the experienced professionals who guide and inspire Squad 87.
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mentors;
