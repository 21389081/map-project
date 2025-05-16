import { useState } from 'react';
export default function SlideButton() {
    const [on, setOn] = useState(false);
    return (
        <button
            type='button'
            onClick={() => setOn(!on)}
            className={`
        relative inline-flex items-center h-7 w-13
        border-(--border-color) border-3
        rounded-full transition-colors duration-200
        ${on ? 'bg-(--orange-color)' : 'bg-transparent'}
      `}
        >
            <span
                className={`
          inline-block w-5 h-5 bg-green-500 rounded-full 
          transition-transform duration-200
          ${on ? 'translate-x-6' : 'translate-x-0'}
        `}
            />
        </button>
    );
}
