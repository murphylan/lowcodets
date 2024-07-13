"use client"

import { Editor, Frame, useEditor } from "@craftjs/core";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button as MaterialButton, Snackbar, TextField } from "@material-ui/core";
import lz from "lzutf8";
import { useState } from "react";
import { Card, CardBottom, CardTop } from "../_components/user/card/Card";
import { Button } from "../_components/user/button/Button";
import { Text } from "../_components/user/text/Text";
import { Container } from "../_components/user/Container";
import { CustomForm, Form, Input, Button as CustomButton } from "../_components/user/CustomForm";
import Link from "next/link";
import { StatusContextProvider } from '@/context/StatusContext';
import Dropdown from "../_components/user/dropdown/Dropdown";

const EditorActions = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [stateToLoad, setStateToLoad] = useState("");

  return (
    <>
      <MaterialButton
        className="load-state-btn"
        size="small"
        variant="outlined"
        color="secondary"
        onClick={() => setDialogOpen(true)}
      >
        Load
      </MaterialButton>
      <Link href="/">返回</Link>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            placeholder='粘贴从“复制当前状态”按钮复制的内容'
            size="small"
            value={stateToLoad}
            onChange={e => setStateToLoad(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <MaterialButton onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </MaterialButton>
          <MaterialButton
            onClick={() => {
              setDialogOpen(false);
              const json = lz.decompress(lz.decodeBase64(stateToLoad));
              actions.deserialize(json);
              setSnackbarMessage("State loaded");
            }}
            color="primary"
            autoFocus
          >
            Load
          </MaterialButton>
        </DialogActions>
      </Dialog>
      <Snackbar
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!snackbarMessage}
        onClose={() => setSnackbarMessage("")}
        message={<span>{snackbarMessage}</span>}
      />
    </>
  );
}

const Page = () => {
  return (
    <div style={{ margin: "0 auto", width: "100%", maxWidth: "1200px" }}>
      <StatusContextProvider>
        <Editor resolver={{ Card, Button, Text, CardTop, CardBottom, Container, CustomForm, Form, Input, CustomButton, Dropdown }}
          enabled={false}
        >
          <EditorActions />
          <Frame>

          </Frame>
        </Editor>
      </StatusContextProvider>
    </div>
  );
}

export default Page;
