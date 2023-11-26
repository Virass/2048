import { Logo } from './Logo'

export const BigLogo = ({ ...props }) => {

  return (
    <Logo
      style={{
        fontSize: "5.4rem",
        position: "absolute",
        top: "10px",
        left: "50%",
        transform: "translateX(-50%) rotate(-8deg)"
      }}
      {...props}
    />
  )
}
