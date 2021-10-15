import NotesList from 'components/NotesList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Main, StyledContainer } from 'components/styled';

const App: React.FC = () => (
  <StyledContainer maxWidth="xl" disableGutters>
    <Header />
    <Main>
      <NotesList />
    </Main>
    <Footer />
  </StyledContainer>
);

export default App;
