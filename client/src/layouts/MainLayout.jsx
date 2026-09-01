import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Home Hub</h1>
        <p>Property Rental and Real Estate Platform</p>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;