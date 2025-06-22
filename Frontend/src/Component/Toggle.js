import React, { useEffect, useRef, useState } from 'react';

const ThemeToggle = () => {
  const [active, setActive] = useState(false);
  const colorButtonsRef = useRef([]);

  useEffect(() => {
    colorButtonsRef.current.forEach((btn) => {
      if (btn) {
        btn.onclick = () => {
          const color = window.getComputedStyle(btn).backgroundColor;
          document.documentElement.style.setProperty('--theme-color', color);
        };
      }
    });
  }, []);

  return (
    <div className={`theme-toggler ${active ? 'active' : ''}`}>
      <div className="toggle-btn" onClick={() => setActive(!active)}>
        <i className="fas fa-cog"></i>
      </div>

      <h3>Theme Color</h3>

      <div className="buttons">
        {['#e74c3c', '#27ae60', '#d30b9e','#c6f106','#9b59b6', '#f39c12', '#1abc9c'].map((color, index) => (
          <div
            key={index}
            ref={(el) => (colorButtonsRef.current[index] = el)}
            className="color-btn"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
