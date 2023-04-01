import { useState, useEffect } from "react";

const useViewportHeight = () => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleWindowResize = () => setHeight(window.innerHeight);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return height;
};

export default useViewportHeight;