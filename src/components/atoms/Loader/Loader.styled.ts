import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  span {
    border-radius: 100%;
    border: 5px solid ${({ theme }) => theme.palette.secondary};
    margin: calc(5px * 2);
  }

  @keyframes preloader {
    100% {
      transform: scale(2);
    }
  }

  :nth-child(1) {
    animation: preloader 0.6s ease-in-out alternate infinite;
  }
  :nth-child(2) {
    animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
  }

  :nth-child(3) {
    animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
  }
`;
