//imports
import styles from "./App.module.scss";

//import react stuff
import { Routes, Route } from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import FirebaseAnalytics from "./Components/FirebaseAnalytics";
// import { useLocation } from "react-router-dom";
// import trackPathForAnalytics from "./TrackPageForAnalytics";
// import { useEffect } from "react";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
    //  initialize firebase
    // const analytics = getAnalytics(app);
    // const { pathname, search } = useLocation();

    // useEffect(() => {
    //     const analytics = () => {
    //         trackPathForAnalytics({
    //             path: pathname,
    //             search: search,
    //             title:
    //                 pathname != null && pathname !== ""
    //                     ? pathname.split("/")[1] ?? ""
    //                     : "",
    //         });
    //     };

    //     analytics();
    // }, [pathname, search]);

    return (
        <div className={styles.App}>
            <FirebaseAnalytics />
            {/* <Router className={styles.App}> */}
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            {/* </Router> */}
        </div>
    );
}

export default App;
