import { useMediaQuery } from "react-responsive";

const Default = ({ children }) => {
  const isNotTouchDevide = useMediaQuery({ minWidth: 1024 });
  return isNotTouchDevide ? children : null;
};

export default Default;

