import React from "react";
import { Button } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  backgroundColor: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Submit",
  backgroundColor: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  backgroundColor: "disabled",
};
