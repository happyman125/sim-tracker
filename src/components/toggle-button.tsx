
import {
  ToggleButton as DefaultToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  Typography,
} from '@mui/material';
import { Done, Close } from '@mui/icons-material';

type ToggleButtonProps  = {
  label: string,
  onValueChange: (value: 'on' | 'off') => void,
} & ToggleButtonGroupProps

export const ToggleButton = ({ label, value="off", onValueChange = () => {},  ...props }: ToggleButtonProps) => {

  const isOn = value === 'on';

  const handleChange = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if(value === 'off') {
      onValueChange('on')
    } else {
      onValueChange('off');
    }
  };

  const onChange = (e: any) => {
    e.preventDefault();
  }

  return (
    <>
    <Typography>{label}</Typography>
    <ToggleButtonGroup color={isOn ? 'success' : 'standard'} onChange={onChange} exclusive value={value} sx={{ mt: 1 }} {...props}>
      <DefaultToggleButton
        size='small'
        value='off'
        disableRipple
        disableFocusRipple
        sx={{ borderRadius: '50%', borderRightColor: 'transparent' }}
        type="button"
        onClick={handleChange}
        onChange={onChange}
      >
        <Close />
      </DefaultToggleButton>
      <DefaultToggleButton
        size='small'
        value='on'
        sx={{ borderRadius: '50%' }}
        disableRipple
        disableFocusRipple
        type="button"
        onClick={handleChange}
        onChange={onChange}
      >
        <Done />
      </DefaultToggleButton>
    </ToggleButtonGroup>
    </>
  );
};
