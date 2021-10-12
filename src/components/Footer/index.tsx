import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import { Container, Left, Center, Right, Logo, Description, SocialContainer, SocialIcon, Title, ListItem, List, ContacItem, Payment } from './styles'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Intratec</Logo>
        <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur adipisci nobis? Et esse tempore enim eius, commodi accusamus porro totam hic est cupiditate sequi ullam exercitationem, debitis possimus ipsum.</Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContacItem>
          <Room style={{marginRight: '10px'}} /> 622 Dixie Path, South Tobinchester 98336
        </ContacItem>
        <ContacItem>
          <Phone style={{marginRight: '10px'}} /> +1 234 56 78
          </ContacItem>
        <ContacItem>
          <MailOutlined style={{marginRight: '10px'}} /> valdir.ti@hotmail.com
        </ContacItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
