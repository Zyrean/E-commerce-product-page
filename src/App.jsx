import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Collections from "./pages/Collections";
import MenShoes from "./pages/MenShoes";
import WomenShoes from "./pages/WomenShoes";
import Kids from "./pages/Kids";
import Contact from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductInformation from "./features/product/ProductInformation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Collections />} />
            <Route path="collections" element={<Collections />} />
            <Route path="menShoes" element={<MenShoes />} />
            <Route path="womenShoes" element={<WomenShoes />} />

            <Route path="kids" element={<Kids />}>
              <Route path=":id" element={<ProductInformation />} />
            </Route>

            {/* <Route path="kids" element={<Kids />} /> */}
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
