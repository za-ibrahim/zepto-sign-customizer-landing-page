import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ZendeskChat from './components/ZendeskChat'
import Home from './pages/Home'
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/about-us",
    exact: true,
    element: <AboutUs />,
  },
  {
    path: "/contact",
    exact: true,
    element: <ContactUs />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

function App() {



  return (
    <>
      <NavBar />
      {/* <div className='pt-[95px]' /> */}
      <main className="relative overflow-hidden">
        <RouterProvider router={router} />
      </main>
      <ZendeskChat />
      <Footer />
    </>
  )
}

export default App