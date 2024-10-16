import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 10%;
  left: 10%;
`;
const animationRotate = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: steelblue;
  animation: ${animationRotate} 1s linear infinite;

  span {
    font-size: 36px;
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
// pseudo selector를 통해 하위 태그에 hover css 선언 시 $:hover 이용

export default function StyledAmination() {
  return (
    <Wrapper>
      <Box>
        {/* Box component 안에 있는 태그에게 스타일을 줄 수 있을까? */}
        <span>😍</span>
      </Box>
    </Wrapper>
  );
}
