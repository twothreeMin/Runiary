import styled from 'styled-components';

export const SubMenu = styled.div`
  & {
    height: 100%;
    width: ${(props) => {
      return props.openSideMenu ? '240px' : '0px';
    }};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #f0ffff;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  & a {
    margin-top: 0.7rem;
    text-decoration: none;
    font-size: 2.1rem;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  & a:hover {
    color: #abffee;
  }

  & svg {
    font-size: 2.3rem;
    vertical-align: bottom;
    margin: 0 1rem 0 0.8rem;
  }
`;
