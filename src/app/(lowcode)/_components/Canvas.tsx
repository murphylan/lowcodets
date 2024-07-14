import { SettingsPanel } from '@/app/(lowcode)/_components/SettingsPanel';
import { Sidebar } from '@/app/(lowcode)/_components/Sidebar';
import { Topbar } from '@/app/(lowcode)/_components/Topbar';
import { Button } from '@/app/(lowcode)/_components/user/button/Button';
import { Card, CardBottom, CardTop } from '@/app/(lowcode)/_components/user/card/Card';
import { Container } from '@/app/(lowcode)/_components/user/Container';
import { Button as CustomButton, CustomForm, Form, Input } from '@/app/(lowcode)/_components/user/CustomForm';
import { Text } from '@/app/(lowcode)/_components/user/text/Text';
import { Editor, Element, Frame } from "@craftjs/core";
import { Grid, Paper } from '@material-ui/core';
import { StatusContextProvider } from '@/context/StatusContext';
import Dropdown from './user/dropdown/Dropdown';

export const Canvas = () => {
  return (
    <StatusContextProvider>
      <div style={{ height: '100%' }}>
        <Editor resolver={{ Card, Button, Text, CardTop, CardBottom, Container, CustomForm, Form, Input, CustomButton, Dropdown }}>
          <Paper style={{ backgroundColor: "#cbe8e7" }}>
            <Topbar />
          </Paper>
          <Grid container spacing={3} style={{ paddingTop: "10px", height: '80vh' }}>
            <Grid item xs={2} style={{ height: '100%' }}>
              <Paper style={{ height: '100%', backgroundColor: "#cbe8e7" }}>
                <Sidebar />
              </Paper>
            </Grid>
            <Grid item xs={8} style={{ height: '100%' }}>
              <Paper style={{ height: '100%' }}>
                <div style={{ height: '100%' }}>
                  <Frame>
                    <Element is={Container} padding={1} background="#eee" canvas height="100%">
                      <Card /> // Card 类型的节点
                      <Button size="small" variant="outlined">点击</Button>
                      <Text fontSize={12} text="你好，世界！" />
                      <Element is={Container} padding={2} background="#999" canvas height="auto">
                        <Text fontSize={12} text="又是我！" />
                      </Element>
                    </Element>
                  </Frame>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={2} style={{ height: '100%' }}>
              <Paper style={{ height: '100%' }}>
                <SettingsPanel />
              </Paper>
            </Grid>
          </Grid>
        </Editor>
      </div>
    </StatusContextProvider>
  )
}

export default Canvas