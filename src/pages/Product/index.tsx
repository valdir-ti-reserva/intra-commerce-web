import { Add, Remove } from '@material-ui/icons'

import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

import { 
  Container, 
  Wrapper, 
  ImgContainer, 
  Image, 
  InfoContainer, 
  Title, 
  Description, 
  Price, 
  Filter, 
  FilterContainer, 
  FilterTitle, 
  FilterColor, 
  FilterSize, 
  FilterSizeOption, 
  AddContainer, 
  AmountContainer, 
  Amount,
  Button
} from './styles'

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Product Title</Title>
          <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt accusantium, adipisci reprehenderit odio animi quibusdam amet possimus ipsum et esse iusto veniam, perspiciatis vitae deserunt expedita! Officia explicabo sit nihil.</Description>
          <Price>$ 20,00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="gray"/>
              <FilterColor color="darkblue"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
