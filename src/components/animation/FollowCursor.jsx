import React, {useState} from "react";

  const FollowCursor = () => {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const followCursor = (e) => {
        const target = e.target;
        if (!target) return;

        if (target.closest('a')) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

        setPosition({ left: e.pageX - -3, top: e.pageY - -3 });
      };

      window.addEventListener('mousemove', followCursor);

      return () => {
        window.removeEventListener('mousemove', followCursor);
      };
    }, []);

    return (
      <div
        className={`follow-cursor ${isActive ? 'follow-cursor_active' : ''}`}
        style={{ left: `${position.left}px`, top: `${position.top}px` }}
      />
    );
  };