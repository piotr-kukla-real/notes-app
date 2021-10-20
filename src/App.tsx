import Footer from 'components/Footer';
import Header from 'components/Header';
import { StyledContainer } from 'components/styled';
import Main from 'components/Main';

const App: React.FC = () => (
  <StyledContainer maxWidth="xl" disableGutters>
    <Header />
    <Main />
    <Footer />
  </StyledContainer>
);

export default App;
