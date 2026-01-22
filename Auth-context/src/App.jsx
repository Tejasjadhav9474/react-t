import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

/* -------------------- */
/* Lazy loaded pages    */
/* -------------------- */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));

const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const UsersDashboard = lazy(() => import("./pages/UsersDashboard"));

const NotFound = lazy(() => import("./pages/NotFound"));

/* -------------------- */
/* Loader Component     */
/* -------------------- */
const PageLoader = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <p className="text-xl">Loading...</p>
        </div>
    );
};

const App = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>

                {/* -------- Layout Routes -------- */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* -------- USER DASHBOARD -------- */}
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <RoleRoute allowedRoles={["user"]}>
                                    <UsersDashboard />
                                </RoleRoute>
                            </ProtectedRoute>
                        }
                    />

                    {/* -------- ADMIN DASHBOARD -------- */}
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <RoleRoute allowedRoles={["admin"]}>
                                    <AdminDashboard />
                                </RoleRoute>
                            </ProtectedRoute>
                        }
                    />
                </Route>

                {/* -------- No Layout -------- */}
                <Route path="/login" element={<Login />} />

                {/* -------- 404 -------- */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Suspense>

    );
};

export default App;



