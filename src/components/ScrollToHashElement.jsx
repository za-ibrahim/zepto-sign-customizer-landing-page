import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Wait for the DOM to fully render
            const id = location.hash.slice(1);
            const el = document.getElementById(id);
            if (el) {
                // Delay ensures layout is ready
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;