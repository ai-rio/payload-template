const CommandDeck = ({ isOpen, onClose }) => {
  return (
    <div id="command-deck" className={isOpen ? "open" : ""}>
      <button onClick={onClose}>Close</button>
      <div>Blog</div>
    </div>
  );
};

export default CommandDeck;