const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="50"
    height="50"
    fill="none"
    aria-label="Flavour Fusion Logo"
  >
    {/* Outer Circle */}
    <circle cx="50" cy="50" r="45" fill="#062a4d" />

    {/* Semi-Circle Wave */}
    <path
      d="M 30,50 A 20,20 0 0,1 70,50"
      stroke="white"
      strokeWidth="5"
      fill="none"
    />

    {/* Text: Flavour */}
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fontSize="12"
      fontWeight="bold"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
      dy="-10" // Move it up
    >
      Flavour
    </text>

    {/* Text: Fusion */}
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fontSize="10"
      fill="#ffffff"
      fontFamily="'Montserrat', sans-serif"
    >
      Fusion
    </text>
  </svg>
);

export default Logo;
