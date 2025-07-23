import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Heading>
          <Menu />
        </Heading>
      </Container>

      <Container>
        <Heading>FORM</Heading>
      </Container>

      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}
