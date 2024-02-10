import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Blayout = styled.button`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  white-space: nowrap;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  padding: ${(props) =>
    props.size === "def"
      ? "8px 16px 8px 16px"
      : props.size === "icon"
      ? "4px 0px 4px 0px"
      : props.size === "sm"
      ? "4px 8px 4px 8px"
      : "8px"};
  height: auto;
  width: auto;
  color: ${(
    props // Text inside the button
  ) =>
    props.variant === "Primary"
      ? "#FFFFFF"
      : props.variant === "Secondary"
      ? "#616161"
      : props.variant === "Disabled"
      ? "#8e8e8e"
      : props.variant === "Ghost"
      ? "#616161"
      : "#FFFFFF"};
  border: ${(props) =>
    props.variant === "Secondary"
      ? "1px solid #e03c2ae0"
      : "0px solid #BF5F82"};
  background-color: ${(props) =>
    props.variant === "Primary"
      ? "#e03c2ae0"
      : props.variant === "Secondary"
      ? "#FFFFFF"
      : props.variant === "Disabled"
      ? "#61616126"
      : props.variant === "Ghost"
      ? "#FFFFFF"
      : "#e03c2ae0"};
  &:hover {
    background-color: ${(props) =>
      props.variant === "Primary"
        ? "#e03c2ae0"
        : props.variant === "Secondary"
        ? "#FFFFFF"
        : props.variant === "Disabled"
        ? "#61616126"
        : props.variant === "Ghost"
        ? "#FFFFFF"
        : "#e03c2ae0"};
  }
  &:hover {
    background-color: ${(props) =>
      props.variant === "Primary"
        ? "#BF5F82"
        : props.variant === "Secondary"
        ? "#f48fb126"
        : props.variant === "Disabled"
        ? "#61616126"
        : props.variant === "Ghost"
        ? "#8B000026"
        : "#000000"};
  }
`;

const Button = ({ children, icon, icon2, ...props }) => {
  return (
    <Blayout {...props}>
      <Icon>{icon && icon}</Icon>
      {children}
      <Icon>{icon2 && icon2}</Icon>
    </Blayout>
  );
};

// Button.propTypes = {
//   children: PropTypes.string,
//   icon: PropTypes.element,
//   icon2: PropTypes.element,
// };

export default Button;
