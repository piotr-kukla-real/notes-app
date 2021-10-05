import { Logo, LogoWrapper, PageName, StyledHeader } from './HeaderElements';

const Header: React.FC = () => (
  <StyledHeader className="media-px">
    <LogoWrapper>
      <PageName variant="h3" component="h1">
        Notes
      </PageName>
      <Logo className="no-shrink" />
    </LogoWrapper>
  </StyledHeader>
);

export default Header;
