import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../mainComponents/Navbar";
import Footer from "../mainComponents/Footer";
import ScrollToTop from "../subComponents/ScrollToTop";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import Chatbot from "../mainComponents/Chatbot.jsx";

function Layout() {
  return (
    <HeroUIProvider locale="en-IN" className="font-verna">
      <ToastProvider
        toastOffset={10}
        maxVisibleToasts={1}
        toastProps={{
          className: "fixed bottom-10 right-10 z-50 pointer-events-auto",
        }}
      />

      <ScrollToTop />

      <div className="flex flex-col dark:bg-[#ffd4b3] min-h-screen">
        <Navbar />

        <main className="pt-24 flex-grow">
          <Suspense fallback={
            <div className="w-full h-[70vh] flex flex-col items-center justify-center transition-colors duration-300">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4" />
              <p className="text-orange-500/80 font-bold tracking-widest text-sm uppercase animate-pulse">
                Loading...
              </p>
            </div>
          }>
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </div>

      <Chatbot />
    </HeroUIProvider>
  );
}

export default Layout;
