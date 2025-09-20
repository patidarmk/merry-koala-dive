import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const NotFound = () => {
  const router = useRouter();
  const { pathname } = router.state.location;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname,
    );
  }, [pathname]);

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center text-center p-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full dark:bg-gray-800/80">
        <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;