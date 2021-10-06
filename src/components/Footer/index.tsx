import { AiFillGithub } from 'react-icons/ai';
import {
  StyledFooter,
  LeftColumn,
  LeftColItem,
  RightColumn,
  FooterLink,
} from './FooterElements';

const Footer: React.FC = () => (
  <StyledFooter className="media-px">
    <LeftColumn>
      <LeftColItem>Piotr Kukla, {new Date().getFullYear()}</LeftColItem>
      <LeftColItem>piotr.kukla19@gmail.com</LeftColItem>
    </LeftColumn>
    <RightColumn className="f-wrap">
      <FooterLink href="https://github.com/piotr-kukla-real/notes-app">
        <AiFillGithub />
      </FooterLink>
    </RightColumn>
  </StyledFooter>
);

export default Footer;
