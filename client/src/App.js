//imports
import styles from "./App.module.scss";

//import react stuff
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useLocation } from "react-router";
import trackPathForAnalytics from "./TrackPageForAnalytics";
import { useEffect } from "react";

function App() {
    const {pathname, search} = useLocation();
    

    useEffect(() => {
        const analytics = () => { 
            trackPathForAnalytics({path: pathname, search: search, title: pathname.split("/")[1]})
        };

        analytics();
    }, [pathname, search]);

    return (
        <div className={styles.App}>
            <Router>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
