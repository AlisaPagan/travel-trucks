import { ReactNode } from "react";
import styles from "./Button.module.css";
import Icon from "../Icon/Icon";

type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";
type ButtonIcon = "close";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: ButtonIcon;
};

function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className,
  icon,
}: ButtonProps) {
  const buttonClassName =
    `${styles.button} ${styles[variant]} ${icon ? styles.withIcon : ""} ${className ?? ""}`.trim();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClassName}
    >
      {icon && <Icon className={styles.closeIcon} name={icon} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
