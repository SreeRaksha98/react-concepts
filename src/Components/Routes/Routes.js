import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    HomePage,

} from "../pages";

/*
* ImportComponent: where all the projects files are exported.
* <Route />
* <Navbar />
*/

const RouteComponent = () => {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                </Routes>
            </div>
        </Router>
    )
}

export default RouteComponent