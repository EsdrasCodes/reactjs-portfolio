import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import PaginaBase from "./pages/PaginaBase"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PaginaBase />}>
                    <Route index element={ <Home />} />
                    <Route path="/Sobre" element={<Sobre />}> </Route>
                    <Route path="/Projetos" element={<Projetos />}> </Route>
                    <Route path="/Contatos" element={<Contatos />}> </Route>
                    <Route path="*" element={<Page404 />}> </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
