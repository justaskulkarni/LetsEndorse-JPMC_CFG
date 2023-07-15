import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FarmerLogin from "./pages/FarmerLogin";
import FarmerSignup from "./pages/FarmerSignup";
import PACLogin from "./pages/PACLogin";
import PACSignup from "./pages/PACSignup";
import MFELogin from "./pages/MFELogin";
import MFESignup from "./pages/MFESignup";
import MFEDashboard from "./pages/MFEDashboard";
import PACDashboard from "./pages/PACDashboard";
import PACViewGradedRequests from "./pages/PACViewGradedRequests"
import FarmerRequestForm from "./pages/FarmerRequestForm";
import FarmerPrivateRoutes from "./utils/FarmerPrivateRoutes";
import MFEPrivateRoutes from "./utils/MFEPrivateRoutes";
import PACPrivateRoutes from "./utils/PACPrivateRoutes";
import FarmerDashboard from "./pages/FarmerDashboard";
import Success from "./pages/Success";
import MFEProducts from "./pages/MFEProducts";
import MFEReturn from "./pages/MFEReturn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/farmer/signup" element={<FarmerSignup />} />
          <Route path="/pac/login" element={<PACLogin />} />
          <Route path="/pac/signup" element={<PACSignup />} />
          <Route path="/mfe/login" element={<MFELogin />} />
          <Route path="/mfe/signup" element={<MFESignup />} />
          <Route element={<FarmerPrivateRoutes />}>
            <Route path="/farmer/requestform" element={<FarmerRequestForm />} />
          </Route>
          {/* <Route element={<MFEPrivateRoutes />}>
            <Route path="/mfe/dashboard" element={<MFEDashboard />} />
          </Route> */}
          <Route element={<PACPrivateRoutes />}>
            <Route path="/pac/dashboard" element={<PACDashboard />} />
            <Route path="/pac/viewgraded" element={<PACViewGradedRequests />} />
          </Route>
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/success" element={<Success />} />
          <Route path="/mfe/dashboard" element={<MFEDashboard />} />
          <Route path="/mfe/products" element={<MFEProducts />} />
          <Route path="/mfe/return" element={<MFEReturn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
