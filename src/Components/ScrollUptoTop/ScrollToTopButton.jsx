import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    setScrollPercent(scrolled);
    setVisible(scrollTop > 300); // Show button after 300px scroll
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <svg className="progress-ring" width="60" height="60">
          <circle
            className="progress-ring-bg"
            cx="30"
            cy="30"
            r="26"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            className="progress-ring-fill"
            cx="30"
            cy="30"
            r="26"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="163.36281798666926"
            strokeDashoffset={163.36 - (163.36 * scrollPercent) / 100}
          />
        </svg>
        <FaArrowUp className="scroll-icon" />
      </div>
    )
  );
};

export default ScrollToTopButton;