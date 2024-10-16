import styled from "styled-components";

// 백틱으로 작성할 것.
const TopDiv = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.$bgColor};
  width: 100px;
  height: 100px;
`;
// Box Component에 부여된 CSS 스타일을 포함하여 이어서 작업할 수 있음.
const Circle = styled(Box)`
  border-radius: 50px;
`;

export default function StyledComponents() {
  return (
    <TopDiv>
      <h1>Styled Components</h1>
      <Box $bgColor="teal" />
      <Circle $bgColor="tomato" />
    </TopDiv>
  );
}
