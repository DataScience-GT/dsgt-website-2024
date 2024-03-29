//imports
import styles from "./App.module.scss";

//import react stuff
import { Routes, Route } from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { useLocation } from "react-router-dom";
import trackPathForAnalytics from "./TrackPageForAnalytics";
import { useEffect } from "react";

function App() {
    const { pathname, search } = useLocation();

    useEffect(() => {
        const analytics = () => {
            trackPathForAnalytics({
                path: pathname,
                search: search,
                title:
                    pathname != null && pathname !== ""
                        ? pathname.split("/")[1] ?? ""
                        : "",
            });
        };
        analytics();

        window.scrollTo(0, 0);
    }, [pathname, search]);

    return (
        <div className={styles.App}>
            {/* <Router className={styles.App}> */}
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            {/* </Router> */}
        </div>
    );
}

export default App;
