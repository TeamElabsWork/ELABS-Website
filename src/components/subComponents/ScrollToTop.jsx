import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.substring(1);
            let attempts = 0;
            const maxAttempts = 30; // Check up to 1.5 seconds

            const tryScroll = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                } else if (attempts < maxAttempts) {
                    attempts++;
                    setTimeout(tryScroll, 50);
                } else {
                    window.scrollTo(0, 0);
                }
            };

            // Start polling with a tiny initial delay to let React cycle run
            const timer = setTimeout(tryScroll, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
