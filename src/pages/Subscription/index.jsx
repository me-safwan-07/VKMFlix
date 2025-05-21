"use client";

import { useState, useEffect, useCallback } from "react";
import { Pricing } from "../../components/Subscription";
import { Dialog, Transition } from "@headlessui/react";
import MovieCard from "../../components/MovieCard";
import { Toaster } from "react-hot-toast";
import { demoPlans } from "../../constants";
import { useGetShowsQuery } from "../../services/TMDB";
import { SkelatonLoader } from "../../components/Loader";
import { FiLoader } from "react-icons/fi";
import { FaPaypal, FaGooglePay, FaCreditCard } from "react-icons/fa";
import { CatalogHeader } from "../Catalog/components";
import { smallMaxWidth } from "../../style";

function SubscriptionPage() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const category = "movie";
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { data, isLoading, isFetching } = useGetShowsQuery({ 
    category,
    type: "top_rated",
    page 
  });

  useEffect(() => {
    const storedPlan = localStorage.getItem("premiumPlan");
    if (storedPlan) {
      const planIndex = demoPlans.findIndex(plan => plan.name === JSON.parse(storedPlan).name);
      if (planIndex !== -1) {
        setSelectedPlanIndex(planIndex);
        setShowMovies(true);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedPlanIndex !== null) {
      setIsOpen(true);
    }
  }, [selectedPlanIndex]);

  useEffect(() => {
    if (isLoading || isFetching) return;
    if (data?.results) {
      setMovies(prev => page > 1 ? [...prev, ...data.results] : [...data.results]);
    }
  }, [data, isFetching, isLoading, page]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedPlanIndex(null);
  }, []);

  const handlePayment = useCallback(() => {
    if (selectedPlanIndex === null) return;
    localStorage.setItem("premiumPlan", JSON.stringify(demoPlans[selectedPlanIndex]));
    setShowMovies(true);
    closeModal();
    setPage(1);
  }, [selectedPlanIndex, closeModal]);

  const handleLoadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  if (showMovies) {
    return (
      
      <div>
        <Toaster position="top-center" />
        {/* <h2 className="text-3xl font-bold my-10 text-center">Premium Movies</h2> */}
        <CatalogHeader title='Premium Movies' />
        <section className={`${smallMaxWidth}`}>

        {isLoading ? (
          <SkelatonLoader isMoviesSliderLoader={false} />
        ) : (
          <>
            <div 
              className="flex flex-wrap xs:gap-4 gap-[14px] justify-center"
              >
              {movies?.map((movie) => (
                <div
                key={movie.id}
                className="flex flex-col xs:gap-4 gap-2 xs:max-w-[170px] max-w-[124px] rounded-lg lg:mb-6 md:mb-5 sm:mb-4 mb-[10px]"
                >
                  <MovieCard movie={movie} category={category} isPremium={true} />
                </div>
              ))}
            </div>
            {isFetching ? (
              <div className="my-4">
                <FiLoader className="mx-auto text-gray-300 w-5 h-5 animate-spin" />
              </div>
            ) : (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleLoadMore}
                  disabled={isFetching}
                  className="py-2 px-4 bg-[#ff0000] text-white rounded-full hover:-translate-y-1 transition-all"
                  >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-[800px] w-full flex justify-center overflow-y-auto rounded-lg">
      <Toaster position="top-center" />
      <Pricing
        plans={demoPlans}
        title="Choose Your Streaming Plan"
        description="Stream the latest movies and TV shows powered by TMDB."
        setSelectedPlan={setSelectedPlanIndex}
      />

      <Transition appear show={isOpen} as="div">
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as="div" enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as="div" enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                    Payment for {selectedPlanIndex !== null && demoPlans[selectedPlanIndex].name} Plan
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-gray-500">
                    ₹{selectedPlanIndex !== null && demoPlans[selectedPlanIndex].price} / {demoPlans[selectedPlanIndex]?.period}
                  </p>

                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Select Payment Method</label>
                    <div className="flex gap-3">
                      <button onClick={() => setPaymentMethod("card")} className={`border p-2 rounded-md flex items-center gap-2 ${paymentMethod === "card" ? "bg-indigo-100" : ""}`}><FaCreditCard /> Card</button>
                      <button onClick={() => setPaymentMethod("paypal")} className={`border p-2 rounded-md flex items-center gap-2 ${paymentMethod === "paypal" ? "bg-indigo-100" : ""}`}><FaPaypal /> PayPal</button>
                      <button onClick={() => setPaymentMethod("gpay")} className={`border p-2 rounded-md flex items-center gap-2 ${paymentMethod === "gpay" ? "bg-indigo-100" : ""}`}><FaGooglePay /> GPay</button>
                    </div>
                  </div>

                  <div className="mt-4">
                    {paymentMethod === "card" && (
                      <>
                        <input type="text" placeholder="Card Number" className="w-full mt-2 p-2 border rounded-md" />
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <input type="text" placeholder="MM/YY" className="p-2 border rounded-md" />
                          <input type="text" placeholder="CVC" className="p-2 border rounded-md" />
                        </div>
                      </>
                    )}
                    {paymentMethod === "paypal" && <p className="mt-2 text-sm">Redirecting to PayPal...</p>}
                    {paymentMethod === "gpay" && <p className="mt-2 text-sm">Proceed with Google Pay on your mobile.</p>}
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button onClick={closeModal} className="px-4 py-2 bg-gray-100 rounded-md">Cancel</button>
                    <button onClick={handlePayment} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      Pay ₹{selectedPlanIndex !== null && demoPlans[selectedPlanIndex].price}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export { SubscriptionPage };