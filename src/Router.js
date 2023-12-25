import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SignUPPage from "./pages/Sign-Up";
import Home from "./pages/Home";
import EyeGlass from "./pages/EyeGlass";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const routes = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUPPage />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/eye-glass",
    element: <EyeGlass />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "*",
    element: <Home />
  },
]);

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
