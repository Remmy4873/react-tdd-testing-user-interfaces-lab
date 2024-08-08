import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import AboutMe from '../components/AboutMe';

describe('AboutMe component', () => {
    it('renders an image with alt text', () => {
      render(<AboutMe />);
      const image = screen.getByAltText('A picture of me');
      expect(image).toBeInTheDocument();
    });
  
    it('renders an h2 with the text "About Me"', () => {
      render(<AboutMe />);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveTextContent('About Me');
    });
  
    it('renders a paragraph with biography text', () => {
      render(<AboutMe />);
      const paragraph = screen.getByText(/I am Remmy Bett and my passion is turning design into code, web developer specializing in both front-end and Back-end development. I'm experienced in developing small to large web applications./i);
      expect(paragraph).toBeInTheDocument();
    });
  
    it('renders a link to GitHub', () => {
      render(<AboutMe />);
      const githubLink = screen.getByRole('link', { name: /GitHub/i });
      expect(githubLink).toHaveAttribute('href', 'https://github.com/Remmy4873');
    });
  
    it('renders a link to LinkedIn', () => {
      render(<AboutMe />);
      const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
      expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/remmy-bett-a25241285/');
    });
});
