import * as React from "react";
import * as System from "../../design-system";
import { ControlType, addPropertyControls } from "framer";

type Props = System.ButtonProps & {
  width: number;
  height: number;
};

export function Button(props) {
  return <System.Button {...props} />;
}

Button.defaultProps = {
  width: 150,
  height: 48,
  disabled: false,
  fluid: true,
  text: "Something Here",
};

addPropertyControls(Button, {
  text: { type: ControlType.String, title: "Text" },
  kind: {
    type: ControlType.Enum,
    options: ["default", "primary", "danger"],
    optionTitles: ["Default", "Primary", "Danger"],
  },
  disabled: { type: ControlType.Boolean, title: "Disabled" },
  fluid: { type: ControlType.Boolean, title: "Fluid" },
});
