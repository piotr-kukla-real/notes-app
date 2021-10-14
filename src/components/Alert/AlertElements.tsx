import styled from 'styled-components';

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  gap: 8px;
  max-width: 350px;
  box-shadow: var(--notify-shadow);

  @media (max-width: 480px) {
    max-width: none;
    width: 100%;
  }
`;

export const AlertMsg = styled.span`
  min-width: 1px;
`;

export const AlertIconWrapper = styled.div`
  width: 25px;
  height: 25px;

  svg {
    height: 100%;
    width: 100%;
  }
`;
