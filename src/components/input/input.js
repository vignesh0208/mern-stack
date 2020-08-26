import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const input = (props, ref) => {
    const handleOnChange = event => {
        const { value } = event.target;
        const { onChange, name } = props;
        onChange && onChange({ value, name, event });
    };
    const {
        className,
        type,
        placeholder,
        value,
        name,
        helperText
    } = props;

    const inputClassName = classnames("", {invalid: helperText})

    let _props = {
        placeholder,
        value,
        name,
        className: inputClassName,
        onChange: handleOnChange,
    };

    return (
        <div className={className}>
            <input {..._props} type={type} ref={ref} />
            <span className="red-text">{helperText}</span>
        </div>
    );
};


input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        "text",
        "number",
        "password",
        "date",
        "email",
        "tel",
        "url",
        "search"
    ]).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    value: PropTypes.string,
    helperText: PropTypes.string
};
  
input.defaultProps = {
    className: "",
    inputClassName: "",
    type: "text",
    label: "",
    placeholder: "",
};

export default React.forwardRef((props, ref) => input(props, ref));