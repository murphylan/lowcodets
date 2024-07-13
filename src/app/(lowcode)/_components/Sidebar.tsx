import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Card } from "./user/card/Card";
import { Button } from "./user/button/Button";
import { Text } from "./user/text/Text";
import { CustomForm } from "./user/CustomForm";
import Dropdown from "./user/dropdown/Dropdown";
import { IconButton } from "@material-ui/core";
import {
  AddCircleOutline as AddCircleOutlineIcon,
  TextFields as TextFieldsIcon,
  ViewQuilt as ViewQuiltIcon,
  CardGiftcard as CardGiftcardIcon,
  Description as DescriptionIcon,
  ArrowDropDownCircle as ArrowDropDownCircleIcon
} from "@material-ui/icons";

export const Sidebar = () => {
  const { connectors } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Box pb={2}>
          <Typography>拖动以添加</Typography>
        </Box>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Button size="small">Click me</Button>)}>
            按钮<AddCircleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Text text="Hi world" />)}>
            文本<TextFieldsIcon />
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Element is={Container} padding={20} canvas children={undefined} background={""} />)}>
            容器<ViewQuiltIcon />
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Card />)}>
            卡片<CardGiftcardIcon />
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <CustomForm />)}>
            表单<DescriptionIcon />
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Element is={Dropdown} id="dropdown1" canvas options={['Option 1', 'Option 2', 'Option 3']} />)}>
            下拉框<ArrowDropDownCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};