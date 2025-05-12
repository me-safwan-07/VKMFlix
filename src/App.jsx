import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import VideoModal from './components/VideoModal'
import SideBar from "./components/SideBar"
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import { Loader } from './components/Loader'

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import Footer from './components/Footer'
import { SubscriptionPage } from './pages/Subscription'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContuctUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfServices'
import FAQ from './pages/FAQ'


const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const Catalog = lazy(() => import("./pages/Catalog/"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Auth = lazy(() => import("./pages/Auth"));
const ProtectedRoute = lazy(() => import("./pages/Auth/ProtectedRoute"));

function App() {
  return (
    <>
        <VideoModal />
        <SideBar />
        <Header />
        <main className="">
          <ScrollToTop>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
                <Route path='/:category/:id' element={
                  <ProtectedRoute>
                    <Detail />
                  </ProtectedRoute>
                } />
                <Route path="/:category" element={<Catalog />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/sign-in" element={<Auth />} />
                <Route path="/sign-up" element={<Auth />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/term-of-services" element={<TermsOfService />} />
                <Route path="/faq" element={<FAQ />} />

              </Routes>
            </Suspense>
          </ScrollToTop>
        </main>
        <Footer />
    </>
  )
}

export default App
