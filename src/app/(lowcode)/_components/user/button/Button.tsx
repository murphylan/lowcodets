import { useNode, UserComponent } from "@craftjs/core";
import { Button as MaterialButton } from "@material-ui/core";
import { ButtonSettings } from './ButtonSettings'

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'default' | 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: UserComponent<ButtonProps> = ({ size, variant, color, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <MaterialButton
      ref={ref => connect(drag(ref as any))}
      size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  );
}

Button.craft = {
  props: {
    size: "small",
    variant: "contained",
    color: "primary",
  },
  related: {
    settings: ButtonSettings
  }
}

