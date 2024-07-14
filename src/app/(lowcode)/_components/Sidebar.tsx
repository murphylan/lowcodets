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
          <Typography>组件列表</Typography>
        </Box>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Button size="small">Click me</Button>)}>
            <AddCircleOutlineIcon />
            <Typography variant="caption">按钮</Typography>
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Text text="Hi world" />)}>
            <TextFieldsIcon />
            <Typography variant="caption">文本</Typography>
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Element is={Container} padding={20} canvas children={undefined} background={""} height={"auto"} />)}>
            <ViewQuiltIcon />
            <Typography variant="caption">容器</Typography>
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Card />)}>
            <CardGiftcardIcon />
            <Typography variant="caption">卡片</Typography>
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <CustomForm />)}>
            <DescriptionIcon />
            <Typography variant="caption">表单</Typography>
          </IconButton>
        </Grid>
        <Grid container direction="column" item>
          <IconButton ref={ref => connectors.create(ref as any, <Element is={Dropdown} id="dropdown1" canvas options={['Option 1', 'Option 2', 'Option 3']} />)}>
            <ArrowDropDownCircleIcon />
            <Typography variant="caption">下拉框</Typography>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};