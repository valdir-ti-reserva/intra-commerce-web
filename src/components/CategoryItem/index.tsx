import { Button, Container, Image, Info, Title } from "./styles"

interface ICategoryItemProps{
    id: number;
    img?: string;
    title?: string;
    desc?: string;
    bg?: string; 
}

interface CategoryItemProps {
  item: ICategoryItemProps 
}

const CategoryItem = ({item}: CategoryItemProps) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
