import { useEditor, useNode } from '@craftjs/core';
import { TextField } from "@material-ui/core";
import { useState } from 'react';
import { TextSettings } from './TextSettings';

interface TextProps {
  text: string;
  fontSize?: number;
  textAlign?: "left" | "center" | "right" | "justify";
}

export const Text = ({ text, fontSize, textAlign }: TextProps) => {
  const { connectors: { connect, drag }, isActive, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));

  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  // 定义本地状态 editable 用于控制文本是否可编辑
  const [editable, setEditable] = useState(false);

  return (
    <div
      ref={ref => connect(drag(ref as any))}
      onClick={e => {
        console.log("enabled:", enabled);
        if (enabled) {
          setEditable(false);
        }
      }}
    >
      <TextField
        value={text}
        onChange={e => {
          if (enabled) {
            setProp((props: { text: string; }) =>
              props.text = e.target.value
            )
          }
        }
        }
        variant="standard"
        InputProps={{
          disableUnderline: !editable,
          style: { fontSize: `${fontSize}px`, textAlign: textAlign },
          readOnly: !enabled,
        }}
        multiline // 允许多行文本
        fullWidth // 占满父容器宽度
      />
    </div>
  )
}


// 将 TextSettings 组件关联到 Text 组件
Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
    textAlign: "left"
  },
  related: {
    settings: TextSettings
  }
}
