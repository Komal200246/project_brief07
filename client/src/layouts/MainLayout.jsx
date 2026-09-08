import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Job Portal System</h1>
        <p>Welcome to the Job Portal System.</p>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;