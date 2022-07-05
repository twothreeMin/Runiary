import styled from 'styled-components';

export const RunItem = styled.div`
  & {
    margin-top: 15px;
    background-color: #e4fffa;
  }

  &:hover {
    border: 1px solid #89f7e2;
    background: #89f7e2;
    box-shadow: -3px -3px #abffee;
  }

  .runItem__information {
    padding: 20px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .runItem__information > li {
    font-size: 20px;
  }
`;
