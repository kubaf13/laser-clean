import styled from 'styled-components';

export const MaintenanceWrapper = styled.section`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.grey};
  color: ${({ theme }) => theme.palette.secondary};
  text-align: center;
`;
