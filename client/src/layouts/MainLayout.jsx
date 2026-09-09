import Navbar from '../components/layout/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <h4>Job Portal</h4>
        <p>&copy; 2026 Job Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}