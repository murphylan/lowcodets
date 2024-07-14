import React from 'react';
import { Element, useNode } from '@craftjs/core';
import { Button as MuiButton, TextField } from '@material-ui/core';
import { Container } from "./Container";

interface InputProps {
  placeholder: string;
  type: string;
}

const Input = ({ placeholder, type }: InputProps) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <TextField
      ref={ref => connect(drag(ref as any))}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      margin="normal"
      name='inputField'  // Added name attribute for identification in FormData
    />
  );
};

interface ButtonProps {
  text: string;
  onClick: (formData: any) => void;
}

const Button = ({ text }: ButtonProps) => {
  const { connectors: { connect, drag } } = useNode();

  const handleClick = () => {
    const formData = new FormData(document.getElementById('form') as HTMLFormElement);
    const formDataObject = {};
    formData.forEach((value, key) => {
      (formDataObject as Record<string, string>)[key] = value.toString();
    });
    console.log('Form Data:', formDataObject);
    alert(JSON.stringify(formDataObject));
  };

  return (
    <MuiButton
      ref={ref => connect(drag(ref as any))}
      onClick={handleClick}
      variant="contained"
      color="primary"
    >
      {text}
    </MuiButton>
  );
};

const Form = ({ children }: { children: React.ReactNode }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <form id="form" ref={ref => connect(drag(ref as any))}>
      {children}
    </form>
  );
};

interface CustomFormProps {
  background?: string;
  padding?: number;
}
const CustomForm = ({ background, padding = 20 }: CustomFormProps) => {

  const handleClick = (formData: any) => {
    console.log('Form Data:', formData);
  };

  return (
    <Container background={background ? background : "white"} padding={padding} height={"auto"}>
      <Element is={Form} id="form" canvas>
        <Element
          is={Input}
          placeholder="Enter text"
          type="text"
        />
        <Element
          is={Button}
          id="button"
          text="Submit"
          onClick={handleClick}
        />
      </Element>
    </Container>
  );
};

export { Button, CustomForm, Form, Input };
