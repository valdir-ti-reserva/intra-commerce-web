import { Container } from './styles'
import ProductItem from '../ProductItem'

import {popularProducts} from '../../data'

const Product = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <ProductItem  item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Product
