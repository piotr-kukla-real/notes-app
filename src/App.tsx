import Header from 'components/Header';
import { StyledContainer } from 'components/styled';

const App: React.FC = () => (
  <StyledContainer maxWidth="xl" disableGutters>
    <Header />
  </StyledContainer>
);

export default App;
