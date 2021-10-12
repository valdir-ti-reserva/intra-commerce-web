import { useState } from 'react';

import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';

import { Container, Arrow, Wrapper, ImgContainer, Image, InfoContainer, Slide, Title, Description, Button } from './styles'

import {sliderItems} from '../../data.js'

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction: string) => {
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
       ))}
       
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />       
      </Arrow>
    </Container>
  )
}

export default Slider