// url=https://www.figma.com/design/2hVAUSUEARPwwBuU7YXXek?node-id=2026-21
const figma = require('figma')
const instance = figma.selectedInstance
// code using [Template V2 API](/template-v2-api) 

let children = "";
instance.findLayers((node) => {
  if (
    node.name === "Button_Base" && 
    node.type === "INSTANCE" && 
    node.hasCodeConnect()
  ) {
    const { example } = node.executeTemplate();
    if (example[0].type === "CODE") 
      children = example[0].code;
  }
}, {});

export default { 
  example: figma.tsx`${children}`,
  id: "Button_Red",
  metadata: { 
    nestable: true,
   }
}