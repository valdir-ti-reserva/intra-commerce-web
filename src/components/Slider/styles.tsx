import styled from "styled-components";

type ArrowProps = {
  direction: string;
};

type SlideProps = {
  bg: string;
};

type WrapperProps = {
  slideIndex: number;
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px; 
  background-color: #feefee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props)=>props.direction === 'left' && '10px'};
  right: ${(props)=>props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: .5;
  z-index: 1;
`;

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

export const Slide = styled.div<SlideProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size:70px;
`;

export const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

