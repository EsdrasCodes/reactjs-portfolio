import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { Outlet } from "react-router-dom";
import Particles from "../../components/Particles"

function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                <Particles />
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase