import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RuniaryHeader } from './components/runiaryHeader';
import { SideMenu } from './components/sideMenu';
import { Home } from './pages/home';
import { Rank } from './pages/rank';

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
    <BrowserRouter>
      <Runiary>
        <RuniaryHeader />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rank" element={<Rank />} />
        </Routes>
      </Runiary>
    </BrowserRouter>
  );
};

export default App;
