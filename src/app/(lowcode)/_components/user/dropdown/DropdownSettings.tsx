import React from 'react';
import { useNode } from '@craftjs/core';
import { TextField, FormControl, FormLabel } from '@material-ui/core';

export const DropdownSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <FormLabel>Data Node Id</FormLabel>
        <TextField
          type="text"
          value={props.dataNodeId || ''}
          onChange={(e) => setProp((props: { dataNodeId: string; }) => (props.dataNodeId = e.target.value))}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <FormLabel>Linked Dropdown</FormLabel>
        <TextField
          type="text"
          value={props.linkedDropdown || ''}
          onChange={(e) => setProp((props: { linkedDropdown: string; }) => (props.linkedDropdown = e.target.value))}
        />
      </FormControl>
    </div>
  );
};