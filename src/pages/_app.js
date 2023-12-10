// pages/_app.js
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Check if the current route is not in the admin area
  const isNotAdminRoute = !router.pathname.startsWith("/admin");

  return (
    <div>
      {/* {isNotAdminRoute && <Navbar />} */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
