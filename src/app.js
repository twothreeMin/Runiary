import styled from 'styled-components';

import { RuniaryHeader } from './components/runiaryHeader';
import { RunContents } from './components/runContents';

const Runiary = styled.div`
  & {
    text-align: center;
    padding: 40px 230px;
  }

  @media screen and (max-width: 1024px) {
    & {
      padding: 40px 10px;
    }
  }
`;

const App = () => {
  return (
    <Runiary>
      <RuniaryHeader />
      <RunContents />
    </Runiary>
  );
};

export default App;
