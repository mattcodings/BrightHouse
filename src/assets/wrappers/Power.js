import styled from "styled-components";

const Wrapper = styled.section`
  .box-heading {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 22px;
    margin: 10px auto;
    align-items: center;
  }
  .control-box {
    height: 175px;
    flex: 0 1 300px;
    width: 300px;
    border: 5px solid black;
  }

  .power-on {
    border: 5px solid green;
  }
  .box-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .range-bar {
    text-align: center;
    color: black;
    margin-top: 10px;
  }
  .on-off-text {
    font-size: 18px;
  }
`;
export default Wrapper;
