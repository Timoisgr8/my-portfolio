import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';


function Notes({ isOpen, setIsOpen }) {
  const initialPosition = { x: window.innerWidth - 340, y: 80 };
  const initialSize = { width: 320, height: 240 }; // Default size for the notes
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [dragging, setDragging] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const hasMoved = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const topBarRef = useRef(null);
  const resizerRef = useRef(null);  // Reference for the resize handle

  // Load note from localStorage
  useEffect(() => {
    const savedNote = localStorage.getItem('notes');
    if (savedNote) setNoteContent(savedNote);
  }, []);

  // Save note to localStorage on change
  useEffect(() => {
    localStorage.setItem('notes', noteContent);
  }, [noteContent]);

  // Reset position on first open
  useEffect(() => {
    if (isOpen && !hasMoved.current) {
      setPosition(initialPosition);
    }
  }, [isOpen]);

  // Handle dragging for position
  const handleMouseDown = (e) => {
    if (topBarRef.current && topBarRef.current.contains(e.target)) {
      setDragging(true);
      offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;
      hasMoved.current = true;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Handle resizing for width and height
  const handleResizeMouseDown = (e) => {
    e.preventDefault();
    // Capture the initial mouse position and size
    const initialMousePosition = { x: e.clientX, y: e.clientY };
    const initialSize = { ...size };

    const handleResizeMouseMove = (e) => {
      const dx = e.clientX - initialMousePosition.x;
      const dy = e.clientY - initialMousePosition.y;

      setSize({
        width: Math.max(150, initialSize.width + dx),  // Prevent shrinking below 150px
        height: Math.max(150, initialSize.height + dy),  // Prevent shrinking below 150px
      });
    };

    const handleResizeMouseUp = () => {
      window.removeEventListener('mousemove', handleResizeMouseMove);
      window.removeEventListener('mouseup', handleResizeMouseUp);
    };

    window.addEventListener('mousemove', handleResizeMouseMove);
    window.addEventListener('mouseup', handleResizeMouseUp);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            top: position.y,
            left: position.x,
            width: size.width,
            height: size.height,
            position: 'fixed',
          }}
          className="z-50 rounded-lg bg-base-100 shadow-lg border border-gray-300 p-4 flex flex-col"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
        >
          <div
            ref={topBarRef}
            className="flex justify-between items-center mb-2 cursor-move text-primary"
          >
            <h3 className="font-bold">Notes</h3>
            <button
              className="btn btn-sm btn-outline text-primary"
              onClick={() => setIsOpen(false)}
            >
              Minimise
            </button>
          </div>

          <textarea
            className="textarea textarea-bordered w-full h-full resize-none box-border bg-base-100 text-primary focus:outline-none"
            placeholder="Write your notes here..."
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            style={{ flex: 1 }}
          />

          <div
            ref={resizerRef}
            onMouseDown={handleResizeMouseDown}
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-gray-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notes;