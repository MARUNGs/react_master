import styled from "styled-components";
import { useState } from "react";

export default function StyledTheme() {
  const [lightOrDark, setLightOrDark] = useState(true);
  const [title, setTitle] = useState("🌞 다크모드");

  // CSS Style ------------------------------------------------
  const Btn = styled.button`
    border-radius: 10px;
    width: 13%;
    height: 45px;

    position: fixed;
    top: 45%;
    left: 45%;
  `;
  const Wrapper = styled.div`
    width: 1920px;
    height: 1080px;
    background-color: ${(props) =>
      lightOrDark
        ? props.theme.light.backgroundColor
        : props.theme.dark.backgroundColor};

    ${Btn}:hover {
      background-color: #2323;
      color: whitesmoke;
    }
  `;
  // ------------------------------------------------------------

  // true = 라이트모드 | false = 다크모드
  const onClick = () => {
    if (lightOrDark) {
      setLightOrDark(false);
      setTitle("🌞 라이트모드");
    } else {
      setLightOrDark(true);
      setTitle("🌙 다크모드");
    }
  };

  return (
    <Wrapper>
      {lightOrDark ? (
        <Btn onClick={onClick}>
          <span>{title}</span>
        </Btn>
      ) : (
        <Btn onClick={onClick}>
          <span>{title}</span>
        </Btn>
      )}
    </Wrapper>
  );
}
