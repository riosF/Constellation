import { Popover, Input } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorRGBPicker: React.FC<{
  disabled?: boolean;
  value?: string;
  selectColor?: (value: string) => void;
  onChange?: (value: string) => void;
}> = ({ disabled = false, value = 'white', selectColor, onChange }) => {
  const [newColor, setNewColor] = useState('');
  const [visible, setVisible] = useState(false);
  const onValChange = (val: string) => {
    setNewColor?.(val);
    onChange?.(val);
  };

  const firstRef = useRef(0);
  useEffect(() => {
    if (firstRef.current === 0) {
      onChange?.(value);
      firstRef.current += 1;
    }
    setNewColor(value);
  }, [onChange, value]);

  return (
    <Popover
      onVisibleChange={() => {
        setVisible(!visible);
        selectColor?.(newColor);
      }}
      visible={visible}
      trigger="click"
      placement="bottomLeft"
      content={
        <SketchPicker
          color={newColor}
          onChangeComplete={({ hex }: any) => onValChange(hex)}
        />
      }
    >
      <Input
        readOnly
        disabled={disabled}
        onClick={() => setVisible(!visible)}
        style={{
          background: newColor,
          width: '32px',
          cursor: 'pointer',
          color: ' #fff',
        }}
      />
    </Popover>
  );
};
export default ColorRGBPicker;
