import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleStatus = (status) => {
      setIsOnline(status);
    };
    window.addEventListener("online", () => handleStatus(true));
    window.addEventListener("offline", () => handleStatus(false));
    return () => {
      window.removeEventListener("online", handleStatus(true));
      window.removeEventListener("offline", handleStatus(false));
    };
  }, []);

  return isOnline;
};

export default useOnline;
