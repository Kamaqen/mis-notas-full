import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: var(--black);
  border: none;
  width: 100%;
  margin-bottom: 10px;
  background-color: transparent;
  ::placeholder {
    color: #8e8e8e;
  }
`;
const Input = ({
  name,
  placeholder = "",
  type,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div>
      <StyledInput
        type={type ? type : "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        required={required ? "required" : ""}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
