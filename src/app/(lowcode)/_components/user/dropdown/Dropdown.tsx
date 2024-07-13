import React, { useState, useEffect } from 'react';
import { useStatusContext } from '@/context/StatusContext';
import { useNode, UserComponent } from '@craftjs/core';
import { DropdownSettings } from './DropdownSettings';

interface DropdownProps {
  options: string[];
  dataNodeId?: string;
  linkedDropdown?: string;
}

const Dropdown: UserComponent<DropdownProps> = ({ options, dataNodeId, linkedDropdown }) => {
  const { id, connectors: { connect } } = useNode();
  const [selectedValue, setSelectedValue] = useState('');
  const { changeStatus, setChangeStatus } = useStatusContext();

  useEffect(() => {
    console.log("linkedDropdown:", linkedDropdown);
    if (linkedDropdown) {
      const linkedNode = document.querySelector(`[data-node-id="${linkedDropdown}"]`) as HTMLSelectElement;
      console.log(linkedNode);
      if (linkedNode) {
        linkedNode.value = selectedValue;
      }
    }
  }, [linkedDropdown, changeStatus]);


  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    console.log(linkedDropdown);
    console.log(e.target.value);
    setChangeStatus(!changeStatus);
    setSelectedValue(e.target.value)
  };

  return (
    <div ref={connect as any} >
      <select
        data-node-id={dataNodeId || id}
        value={selectedValue}
        onChange={handleChange}
        style={{ width: '300px', marginTop: '10px', marginBottom: '10px' }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.craft = {
  props: {
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  related: {
    settings: DropdownSettings,
  },
};

export default Dropdown;