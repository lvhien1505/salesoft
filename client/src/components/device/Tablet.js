import { useMediaQuery } from "react-responsive";

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

const TouchDevice = ({ children }) => {
  const isTouchDevice = useMediaQuery({ maxWidth: 1023 });
  return isTouchDevice ? children : null;
};

export { Tablet,TouchDevice };
