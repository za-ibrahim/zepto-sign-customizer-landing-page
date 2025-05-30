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

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  }
]);

function App() {



  return (
    <>
      <NavBar />
      <div className='pt-[95px]' />
      <main>
        <RouterProvider router={router} />
      </main>
      <ZendeskChat />
      <Footer />
    </>
  )
}

export default App