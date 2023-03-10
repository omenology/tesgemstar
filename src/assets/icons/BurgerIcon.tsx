const BurgerIcon = ({color="white"}:{color?:string}) => (
  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8.57143H25V11.4286H0V8.57143ZM0 0H25V2.85714H0V0ZM0 17.1429H25V20H0V17.1429Z" fill={color} />
  </svg>
);

export default BurgerIcon