import styled from "styled-components";

// CSS 정의
const Father = styled.div`
  display: flex;
`;
const Button = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
// styled-components는 props를 추가설정할 수 있다.(attrs)
const Input = styled.input.attrs({
  required: true,
  minLength: 10,
})`
  background-color: tomato;
`;

export default function StyledTrics() {
  return (
    <Father as="header">
      {/* Q. 컴포넌트 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을때? */}
      {/* A. 'as' props를 사용한다. as의 값은 a 태그를 삽입해서 그 태그의 props를 사용할 수 있게 된다. */}
      <Button as="a" href="/">
        Log In
      </Button>

      <Input />
      <Input />
      <Input />
    </Father>
  );
}
