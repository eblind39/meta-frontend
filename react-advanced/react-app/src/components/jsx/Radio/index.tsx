import * as React from "react";
import "./styles.css";

interface RadioGroupProps {
    onChange: (value: string) => void
    selected: string
    children: React.ReactNode
}

export const RadioGroup = ({ onChange, selected, children }: RadioGroupProps) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    return React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, {
        onChange,
        checked: (child.props as React.HTMLProps<HTMLElement>).value === selected,
    }) : child;
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
}

interface RadioOptionProps {
    value: string
    checked?: boolean
    onChange?: (value: string) => void | undefined
    children?: React.ReactNode
}

export const RadioOption = ({ value, checked = false, onChange = undefined, children = null}: RadioOptionProps) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input type="radio"
        id={value}
        name={value}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (typeof onChange !== 'undefined') {
                onChange(e.target.value);
            }
       }} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
