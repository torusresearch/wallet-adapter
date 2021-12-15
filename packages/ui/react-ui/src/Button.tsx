import React, { CSSProperties, FC, MouseEvent, ReactElement } from 'react';

export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    endIcon?: ReactElement;
    endText?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    startIcon?: ReactElement;
    style?: CSSProperties;
    tabIndex?: number;
}

export const Button: FC<ButtonProps> = (props) => {
    const justifyContent = props.endIcon || props.startIcon ? 'space-between' : 'center';

    return (
        <button
            className={`wallet-adapter-button ${props.className || ''}`}
            disabled={props.disabled}
            onClick={props.onClick}
            style={{ justifyContent, ...props.style }}
            tabIndex={props.tabIndex || 0}
            type="button"
        >
            {props.startIcon && <i className="wallet-adapter-button-start-icon">{props.startIcon}</i>}
            {props.children}
            {props.endIcon && <i className="wallet-adapter-button-end-icon">{props.endIcon}</i>}
            {props.endText && !props.endIcon && <span className="wallet-adapter-button-end-text">{props.endText}</span>}
        </button>
    );
};
