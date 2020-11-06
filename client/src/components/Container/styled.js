import styled from "styled-components";

import background from "./background.png";

export const MaskContainer = styled.div.attrs(({ maskWidth }) => ({
  style: { width: maskWidth },
}))`
  background: url(${background});
  background-position: right bottom;
  border-left: ${(props) => (props.maskWidth ? 2 : 0)}px solid red;
  box-sizing: border-box;
  height: 300px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Wrapper = styled.div`
  background: #6592cf;
  height: 300px;
  overflow: hidden;
  cursor: w-resize;
  position: relative;
  width: 400px;

  .button {
    background: #eeb850;
    border-radius: 25px;
    height: 50px;
    left: 175px;
    position: absolute;
    top: 125px;
    width: 50px;
  }

  .inner {
    background: #243d83;
    border-radius: 75px;
    height: 150px;
    left: 125px;
    position: absolute;
    top: 75px;
    width: 150px;
  }

  .outer {
    background: #6592cf;
    border-radius: 150px;
    left: 75px;
    height: 250px;
    position: absolute;
    top: 25px;
    width: 250px;
  }

  .rectangle {
    background: #243d83;
    height: 150px;
    left: 50px;
    position: absolute;
    top: 75px;
    width: 300px;
  }
`;

export default Wrapper;
