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
import { createBatch, CreateBatchBody } from '../services';

const createValidationSchema = yup.object().shape({
  name: yup.string().required('Batch name is required'),
  startIccid: yup
    .number()
    .typeError("Doesn't look like a number")
    .required('Iccid is required')
    .test(
      'len',
      'Must be 19-digits number + 1 Luhn checksum digit',
      (val) => val?.toString()?.length === 20
    ),
  startImsi: yup
    .number()
    .typeError("Doesn't look like a number")
    .required('Imsi is required')
    .test(
      'len',
      'Must be 15-digits number',
      (val) => val?.toString()?.length === 15
    ),
  count: yup.number().min(1).max(25).required('Count is required'),
  isActive: yup.boolean().required('Status is required'),
});

type BatchFormProps = {
  onCancel?: () => void;
  onSubmit?: () => void;
};

export function BatchForm({
  onCancel = () => {},
  onSubmit = () => {},
}: BatchFormProps) {
  const title = 'Add SIMs';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleSubmit = async ({ count, ...values }: CreateBatchBody) => {
    try {
      setLoading(true);
      await createBatch({
        count: Number(count),
        ...values,
      });
      onSubmit();
    } catch (error: any) {
      console.log(error);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h5'>{title}</Typography>
      <Formik
        initialValues={{
          name: '',
          startIccid: '',
          startImsi: '',
          count: 1,
          isActive: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={createValidationSchema}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          setFieldValue,
        }) => (
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={handleSubmit}
          >
            <TextField
              placeholder='Batch Name'
              label='Batch Name'
              sx={{ mt: 2 }}
              value={values?.name}
              error={Boolean(errors?.name)}
              helperText={errors?.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            <TextField
              placeholder='ICCID (19 digits + 1 digit checksum)'
              label='ICCID start range'
              sx={{ mt: 2 }}
              value={values?.startIccid}
              error={Boolean(errors?.startIccid)}
              helperText={errors?.startIccid}
              onChange={handleChange('startIccid')}
              onBlur={handleBlur('startIccid')}
            />
            <TextField
              placeholder='IMSI (15 digits)'
              label='IMSI start range'
              sx={{ mt: 2 }}
              value={values?.startImsi}
              error={Boolean(errors?.startImsi)}
              helperText={errors?.startImsi}
              onChange={handleChange('startImsi')}
              onBlur={handleBlur('startImsi')}
            />
            <TextField
              placeholder='Number of SIMs to create'
              label='Count (max 25)'
              sx={{ mt: 2 }}
              value={values?.count}
              error={Boolean(errors?.count)}
              helperText={errors?.count}
              onChange={handleChange('count')}
              onBlur={handleBlur('count')}
            />
            <Box mt={1}>
              <ToggleButton
                value={values?.isActive ? 'on' : 'off'}
                label='Active'
                onValueChange={(value) => {
                  setFieldValue('isActive', value === 'on');
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
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {error.map((error, index) => (
        <FormHelperText error key={index}>{error}</FormHelperText>
      ))}
    </Box>
  );
}
