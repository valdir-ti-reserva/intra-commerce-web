import {Send} from '@material-ui/icons'
import { Container, Title, Description, InputContainer, Input, Button } from './styles'

const Newsletter = () => {
  return (
    <Container>
      <Title>Welcome</Title>
      <Description>Welcome description</Description>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
