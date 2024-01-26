import { FooterWrapper, HorizontalLine } from './Footer.styled';
import type { Footer as FooterType } from './Footer.types';

const currentYear = new Date().getFullYear();

export const Footer: FooterType = () => (
  <FooterWrapper>
    <HorizontalLine />
    <p>Laser Clean | {currentYear}</p>
  </FooterWrapper>
);
