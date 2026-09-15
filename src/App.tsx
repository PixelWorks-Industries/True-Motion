import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLoader } from "@/components/SiteLoader";
import { Layout } from "@/components/layout/Layout";
import { SmoothScroll } from "@/components/SmoothScroll";

import { Home } from "@/pages/Home";
import { Work } from "@/pages/Work";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Services } from "@/pages/Services";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
         <SiteLoader />
      <SmoothScroll />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;