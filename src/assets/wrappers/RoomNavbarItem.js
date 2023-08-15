import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  section {
    height: 97px;
    border: 1px solid black;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    flex: 0 1 160px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  section a {
    text-decoration: none;
    color: black;
  }
  .active-arrow {
    position: absolute;
    top: 100px;
    visibility: hidden;
  }

  .room-link {
    text-align: center;
  }

  .room-in-use {
    background-color: #aaa;
  }

  section:has(.active) {
    background-color: black;

    .active {
      color: white;
    }
    .active-arrow {
      visibility: visible;
      width: 25px;
      height: auto;
    }
  }
  @media screen and (max-width: 960px) {
    section:has(.active) {
      border: 5px solid blue;
      .active-arrow {
        visibility: hidden;
      }
    }
  }
`;
export default Wrapper;
