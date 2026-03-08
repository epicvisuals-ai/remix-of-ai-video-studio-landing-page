import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContentLicenseTerms from "./pages/ContentLicenseTerms";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";
import AiContentPolicy from "./pages/AiContentPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/content-license-terms" element={<ContentLicenseTerms />} />
        <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
        <Route path="/ai-content-policy" element={<AiContentPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}