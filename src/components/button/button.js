import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        className: PropTypes.string,
        buttonClassName: PropTypes.string,
        type: PropTypes.string,
        label: PropTypes.string,
      };
    
    static defaultProps = {
        className: "",
        buttonClassName: "",
        type: "",
        label: "",
    };

    handleButtonClick = event => {
        const { onClick } = this.props;
        onClick && onClick({ event });
    };

    render() {
        const {
            className,
            buttonClassName,
            type,
            label,
        } = this.props;

        return (
            <div className={className}>
                <button type={type} className={buttonClassName}>{label}</button>
            </div>
        )
    }
}
 
export default Button;