import { Box, Modal as DefaultModal, ModalProps } from '@mui/material';
export const Modal = ({ children, open, ...props }: ModalProps) => {
  return (
    <DefaultModal open={open} {...props}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: 400,
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          p: 4,
          boxShadow: 24,
          borderRadius: 1,
        }}
      >
        {children}
      </Box>
    </DefaultModal>
  );
};
