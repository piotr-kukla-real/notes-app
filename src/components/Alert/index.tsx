import { AlertContainer, AlertIconWrapper, AlertMsg } from './AlertElements';

interface Alert {
  message?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

const Alert: React.FC<Alert> = ({ message, icon, style }) => (
  <AlertContainer style={style}>
    <AlertIconWrapper className="no-shrink">{icon}</AlertIconWrapper>
    <AlertMsg>{message}</AlertMsg>
  </AlertContainer>
);

export default Alert;
