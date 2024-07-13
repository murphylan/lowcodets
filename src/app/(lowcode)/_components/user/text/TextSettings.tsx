import { useNode } from '@craftjs/core';
import { FormControl, FormLabel, Slider } from "@material-ui/core";


// 定义 TextSettings 组件，用于编辑 Text 组件的设置
export const TextSettings = () => {
  // 使用 useNode 钩子获取节点的属性和方法
  const { actions: { setProp }, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));

  return (
    <>
      {/* 使用 Material-UI 的表单控件构建字体大小调整 UI */}
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7} // 设置初始值，如果未定义则为 7
          step={1} // 每次滑动的步长为 1
          min={1} // 最小值为 1
          max={50} // 最大值为 50
          onChange={(_, value) => {
            // 更新字体大小属性
            setProp((props: { fontSize: number | number[]; }) => props.fontSize = value);
          }}
        />
      </FormControl>
    </>
  )
}