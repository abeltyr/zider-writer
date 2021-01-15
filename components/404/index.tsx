import { Container, Four0FourContainer, Message, Four0FourButton } from "./style";
import Button from "../button"
import { theme } from "../../styles/theme"
import { useRouter } from 'next/router'

const Four0Four = () => {
  const route = useRouter();
  return (
    <Container>

      <Four0FourContainer>
        <span>4</span>
        <span>O</span>
        <span>4</span>
      </Four0FourContainer>
      <Message>
        <span>Page not found</span>
      </Message>
      <Four0FourButton>
        <Button text="Go Home" borderColor={theme.primary3} textColor={theme.primary3} onClick={() => {
          route.push("/")
        }} />
      </Four0FourButton>
    </Container >
  )
}

export default Four0Four

