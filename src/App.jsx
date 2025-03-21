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


const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const Catalog = lazy(() => import("./pages/Catalog/"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
              <Route path='/:category/:id' element={<Detail />} />
              <Route path="/:category" element={<Catalog />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </main>
      <Footer />
    </>
  )
}

export default App
