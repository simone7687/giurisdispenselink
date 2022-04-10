import Navbar from "components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "shared/ErrorBoundary";
import ValidLinks from "ValidLinks";

const routes = [
    { title: "Link Validi", path: "/", element: <ValidLinks /> },
];
function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Navbar pages={routes} injectFirst />
                <Routes>
                    {(routes).map((route) => (
                        <Route path={route.path} element={route.element} />
                    ))}
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
