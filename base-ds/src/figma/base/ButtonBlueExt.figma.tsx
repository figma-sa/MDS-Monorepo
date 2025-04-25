import figma from "@figma/code-connect";
import { Button } from "primitives";


figma.connect(Button, "<FIGMA_BUTTONS_BUTTON_BLUE_EXT>", {
  props: {
    children: figma.children("Button_Base")
  },
  example: ({ children }) => (
    <>
    {children}
    </>
  ),
});
