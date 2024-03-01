import Navbar from "./layout/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Carousel from "./pages/Carousel";
import Contract from "./pages/Contract";
import SocialMedia from "./pages/SocialMedia";
import Dropdown from "./pages/Dropdown";
import Email from "./pages/Email";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-12 dark:bg-sky-950 dark:text-white min-h-screen h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="contract" element={<Contract />} />
          <Route path="social_media" element={<SocialMedia />} />
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="email" element={<Email />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
