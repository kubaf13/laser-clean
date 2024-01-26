import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: ${({ theme }) => theme.palette.secondary};

  p {
    font-size: 16px;

    @media ${({ theme }) => theme.media.tablet} {
      font-size: 20px;
    }
  }
`;

export const HorizontalLine = styled.hr`
  background: ${({ theme }) => theme.palette.gradients.basic}
  width: 90%;
  height: 1px;
  margin: 0 auto 20px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 95%;
  }
`;
