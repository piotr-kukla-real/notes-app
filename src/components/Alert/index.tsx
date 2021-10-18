import { AlertContainer, AlertIconWrapper, AlertMsg } from './AlertElements';

const Alert: React.FC<Props> = ({ message, icon, style }) => (
  <AlertContainer style={style}>
    <AlertIconWrapper className="no-shrink">{icon}</AlertIconWrapper>
    <AlertMsg>{message}</AlertMsg>
  </AlertContainer>
);

export interface Props {
  message?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export default Alert;
