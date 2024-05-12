import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductInfoPage } from "../pages/ProductInfoPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/view/:id" element={<ProductInfoPage />} />
        </Routes>
    )
}