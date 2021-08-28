import { useMediaQuery } from "react-responsive";

const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  return isLaptop ? children : null;
};



export default Laptop;
