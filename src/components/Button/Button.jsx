import { Btn } from "./Button.styled";


export const Button =({children, type = "button", selected = false, ...otherProps}) => {
    return (
        <Btn type={type}
        {...otherProps}>
            {children}
        </Btn>
    );
};