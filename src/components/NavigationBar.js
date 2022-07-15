import { Navbar, Container, Nav } from "react-bootstrap"
const NavigationBar = () => {
    return (
        <div className="logo">
            <Navbar variant="dark">
                <Container>
                    <nav-Brand>TEREVIE</nav-Brand>
                    <nav>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#starwars">STAR WARS</Nav.Link>
                    </nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar