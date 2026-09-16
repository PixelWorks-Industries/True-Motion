import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { SiteLoader } from "@/components/SiteLoader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Layout } from "@/components/layout/Layout";

import { Dashboard } from "@/dashboard/Dashboard";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Services } from "@/pages/Services";
import { Work } from "@/pages/Work";

function PublicLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteLoader />
      <SmoothScroll />

      <Routes>
      <Route
  path="/dashboard"
  element={<Dashboard />}
/>

        {/* Public site */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;