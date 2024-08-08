import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Ensure the path is correct

describe('App component', () => {
  it('renders AboutMe component correctly', () => {
    render(<App />);
    
    // Check for the image
    const image = screen.getByAltText('A picture of me');
    expect(image).toBeInTheDocument();

    // Check for the heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('About Me');

    // Check for the biography paragraph
    const paragraph = screen.getByText(/I am Remmy Bett and my passion is turning design into code, web developer specializing in both front-end and Back-end development. I'm experienced in developing small to large web applications./i);
    expect(paragraph).toBeInTheDocument();

    // Check for the GitHub link
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Remmy4873');

    // Check for the LinkedIn link
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/remmy-bett-a25241285/');
  });
});
