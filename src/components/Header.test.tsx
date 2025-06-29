import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';


jest.mock('@/components/CommandDeck', () => ({
  __esModule: true,
  default: jest.fn(({ isOpen, onClose }) => (
    <div data-testid="mock-command-deck" className={isOpen ? "open" : ""}>
      <button aria-label="Close navigation menu" onClick={onClose}>Close</button>
      <div>Blog</div>
    </div>
  ))
}));

describe('Header', () => {
  beforeEach(() => {
    (CommandDeck as jest.Mock).mockClear();
  });

  it('renders the CDH logo and text', () => {
    render(<Header />);
    expect(screen.getByText('CDH')).toBeInTheDocument();
    expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument();
  });

  it('toggles the CommandDeck when the hamburger icon is clicked', () => {
    render(<Header />);
    const hamburgerButton = screen.getByLabelText('Open navigation menu');
    fireEvent.click(hamburgerButton);
    expect(CommandDeck).toHaveBeenCalledWith(expect.objectContaining({ isOpen: true }), {});

    const closeButton = screen.getByLabelText('Close navigation menu');
    fireEvent.click(closeButton);
    expect(CommandDeck).toHaveBeenCalledWith(expect.objectContaining({ isOpen: false }), {});
  });

  it('displays HUD items on desktop', () => {
    // Mock window.innerWidth to simulate desktop view
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    render(<Header />);
    expect(screen.getByText('Active Deals')).toBeInTheDocument();
    expect(screen.getByText('Overdue')).toBeInTheDocument();
    expect(screen.getByText('Key Contacts')).toBeInTheDocument();

    // Reset window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    });
  });
});