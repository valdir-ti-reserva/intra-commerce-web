import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Product from '../../components/Product'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

import { Container, Filter, FilterContainer, FilterText, Select, Title, Option } from './styles'

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Product List</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>ML</Option>
          </Select>
          </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
