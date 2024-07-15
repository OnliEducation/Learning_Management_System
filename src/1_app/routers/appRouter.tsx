import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Homepage } from "../../2_pages/Homepage"
import { Login } from "../../2_pages/Login"
import { SignUp } from "../../2_pages/SignUp"

import { TestPage } from "../../2_pages/TestPage"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/test" element={<TestPage />} />
    </Route>
))

export function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}