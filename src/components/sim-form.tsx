import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';

import { ToggleButton } from './toggle-button';
import { updateSim } from '../services';

const updateValidationSchema = yup.object().shape({
  batchId: yup.string(),
  iccid: yup
    .number()
    .typeError("Doesn't look like a number")
    .test(
      'len',
      'Must be 19-digits number + 1 Luhn checksum digit',
      (val) => val?.toString()?.length === 20
    ),
  imsi: yup
    .number()
    .typeError("Doesn't look like a number")
    .test(
      'len',
      'Must be 15-digits number',
      (val) => val?.toString()?.length === 15
    ),
  isActive: yup.boolean(),
});

export type Sim = {
  id: number;
  iccid: string;
  imsi: string;
  isActive: boolean;
  batchId: number;
  updatedAt: string;
  createdAt: string;
  batchName?: string;
};

type SimFormProps = {
  data: Sim;
  onCancel?: () => void;
  onSubmit?: (data: any) => void;
};

export function SimForm({
  data,
  onCancel = () => {},
  onSubmit = () => {},
}: SimFormProps) {
  const title = 'Update SIM';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleSubmit = async ({ imsi, isActive }: any) => {
    try {
      setLoading(true);
      const newData: any = await updateSim(data.id, {
        imsi,
        isActive,
      });
      onSubmit(newData?.data);
    } catch (error: any) {
      console.log(error);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const { batchId, iccid, imsi, isActive, batchName } = data;

  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h5'>{title}</Typography>
      <Formik
        initialValues={{
          batchId,
          iccid,
          imsi,
          isActive,
          batchName
        }}
        onSubmit={handleSubmit}
        validationSchema={updateValidationSchema}
      >
        {({ handleSubmit, values, handleChange, handleBlur, errors, setFieldValue, touched }) => (
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={handleSubmit}
          >
            <TextField
              placeholder='Batch'
              label='Batch'
              sx={{ mt: 2 }}
              value={values?.batchName ?? values?.batchId}
              error={Boolean(errors?.batchId) && Boolean(touched?.batchId)}
              helperText={errors?.batchId}
              disabled
            />
            <TextField
              placeholder='ICCID (19 digits + 1 digit checksum)'
              label='ICCID '
              sx={{ mt: 2 }}
              value={values?.iccid}
              error={Boolean(errors?.iccid) && Boolean(touched?.iccid)}
              helperText={errors?.iccid}
              disabled
            />
            <TextField
              placeholder='IMSI (15 digits)'
              label='IMSI'
              sx={{ mt: 2 }}
              value={values?.imsi}
              error={Boolean(errors?.imsi) && Boolean(touched?.imsi)}
              helperText={errors?.imsi}
              onChange={handleChange('imsi')}
              onBlur={handleBlur('imsi')}
            />
            <Box mt={1}>
              <ToggleButton
                value={values?.isActive ? 'on' : 'off'}
                label='Active'
                onValueChange={(value) => {
                  setFieldValue('isActive', value === 'on')
                }}
              />
            </Box>
            <Box mt={3} alignSelf='flex-end'>
              <Button color='error' onClick={onCancel}>
                Cancel
              </Button>
              <Button
                disabled={loading}
                type='submit'
                variant='contained'
                sx={{ ml: 1 }}
              >
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {error?.map((error, index) => (
        <FormHelperText key={index} error>{error}</FormHelperText>
      ))}
    </Box>
  );
}
