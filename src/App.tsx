
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Pages
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import Tenders from "./pages/Tenders";
import TenderDetails from "./pages/TenderDetails";
import Suppliers from "./pages/Suppliers";
import SupplierDetails from "./pages/SupplierDetails";
import BuyerPortal from "./pages/BuyerPortal";
import SellerPortal from "./pages/SellerPortal";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categorySlug" element={<CategoryPage />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/tenders/:tenderId" element={<TenderDetails />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/:supplierId" element={<SupplierDetails />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/buyer" element={<BuyerPortal />} />
          <Route path="/seller" element={<SellerPortal />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
