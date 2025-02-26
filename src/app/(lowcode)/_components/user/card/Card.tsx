import React from "react";
import { Text } from "../text/Text";
import { Button } from "../button/Button";
import { Container } from "../Container";
import { useNode, Element } from "@craftjs/core";
import { ContainerDefaultProps } from "../Container";


// 注意 CardTop 和 CardBottom 没有指定拖动连接器，因为我们不会将这些组件用作可拖动组件；添加拖动处理程序将毫无意义。

export const CardTop = ({ children }: { children: React.ReactNode }) => {
  const { connectors: { connect } } = useNode();
  return (
    <div ref={connect as any} className="text-only" >
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    // 只接受 Text
    canMoveIn: (incomingNodes: any[]) => incomingNodes.every(incomingNode => incomingNode.data.type === Text)
  }
}

export const CardBottom = ({ children }: { children: React.ReactNode }) => {
  const { connectors: { connect } } = useNode();
  return (
    <div ref={connect as any} >
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    // 只接受 Button
    canMoveIn: (incomingNodes: any[]) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
  }
}

export const Card = ({ background, padding = 20 }: { background?: string; padding?: number }) => {
  return (
    <Container background={background ? background : "white"} padding={padding} height="auto">
      <Element id="text" is={CardTop} canvas > // 类型为 CardTop 的 Canvas 节点
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      < Element id="buttons" is={CardBottom} canvas > // 类型为 CardBottom 的 Canvas 节点
        <Button size="small" > Learn more </Button>
      </Element>
    </Container>
  )
}

Card.craft = {
  props: ContainerDefaultProps,
};