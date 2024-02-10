import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledTextarea = styled.textarea`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: var(--black);
  display: block;
  border: none;
  width: 100%;
  background-color: transparent;
  ::placeholder {
    color: #8e8e8e;
  }
`;
const Textarea = ({
  name,
  placeholder = "",
  type,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div>
      <StyledTextarea
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

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textarea;
