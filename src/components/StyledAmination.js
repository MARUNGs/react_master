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

// span 태그로 선언한 이모지 컴포넌트
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: steelblue;
  animation: ${animationRotate} 1s linear infinite;

  ${Emoji /*위에서 선언한 스타일 컴포넌트*/} {
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
        {/* span 태그로 정의된 컴포넌트지만, as props를 활용하여 p로 전환시키기 */}
        <Emoji as="p">😍</Emoji>
      </Box>

      <Emoji>😎</Emoji>
    </Wrapper>
  );
}
