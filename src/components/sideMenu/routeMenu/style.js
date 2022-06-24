import styled from 'styled-components';

export const SubMenu = styled.div`
  & {
    height: 100%;
    width: ${(props) => {
      return props.openSideMenu ? '250px' : '0px';
    }};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #444;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  & a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  & a:hover {
    color: #f1f1f1;
  }
`;
