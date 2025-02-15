import React from 'react';
import { RxCross2 } from 'react-icons/rx';

interface CrossButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const CrossButton: React.FC<CrossButtonProps> = ({ onClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <RxCross2
      onClick={onClick}
      className="text-3xl ml-4 cursor-pointer"
      title="Clear"
      aria-label="Clear" // Accessibility improvement
    />
  );
};

export default CrossButton;
