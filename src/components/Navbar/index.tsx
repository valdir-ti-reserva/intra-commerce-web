import Badge from '@material-ui/core/Badge';
import { Search,ShoppingCartOutlined } from '@material-ui/icons';
import {Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper} from './styles'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color: 'gray', fontSize: '16px'}} />
          </SearchContainer>
        </Left>
        <Center><Logo>Intra-commerce</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined color="action" />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
