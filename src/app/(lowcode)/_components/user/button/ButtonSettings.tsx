import { useNode } from "@craftjs/core";
import { FormControl, FormControlLabel, FormLabel, Button as MaterialButton, Radio, RadioGroup } from "@material-ui/core";

export const ButtonSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup defaultValue={props.size} onChange={(e) => setProp((props: { size: string; }) => props.size = e.target.value)}>
          <FormControlLabel label="Small" value="small" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Medium" value="medium" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Large" value="large" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup defaultValue={props.variant} onChange={(e) => setProp((props: { variant: string; }) => props.variant = e.target.value)}>
          <FormControlLabel label="Text" value="text" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Outlined" value="outlined" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Contained" value="contained" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup defaultValue={props.color} onChange={(e) => setProp((props: { color: string; }) => props.color = e.target.value)}>
          <FormControlLabel label="Default" value="default" control={<Radio size="small" color="default" />} />
          <FormControlLabel label="Primary" value="primary" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Seconday" value="secondary" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
    </div>
  )
};