import { useEffect, useState, MouseEvent, FormEvent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Box,
  Button,
  Divider,
  TablePagination,
  TableFooter,
  Typography,
  Chip
} from '@mui/material';
import { Search, MoreHoriz, Apps, AccountCircle } from '@mui/icons-material';
import { fill } from 'lodash';

import { getSims, getBatches } from './services';
import { Modal, BatchForm, SimForm, Sim } from './components';

const columns: string[] = ['ICCID', 'IMSI', 'Batch Name', 'Status', 'Action'];

type PageMeta = {
  number: number;
  size: number;
  total: number;
};

type Filters = {
  pageNumber: number;
  pageSize: number;
  'filter[search]'?: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [sims, setSims] = useState<Sim[]>([]);
  const [open, setOpen] = useState(false);
  const [sim, setSim] = useState<any>(null);
  const [pageMeta, setPageMeta] = useState<PageMeta>({
    number: 1,
    size: 1,
    total: 94,
  });
  const [filters, setFilters] = useState<Filters>({
    pageNumber: 0,
    pageSize: 10,
    'filter[search]': '',
  });
  const [search, setSearch] = useState<string>('');
  const [batches, setBatches] = useState<any>({});

  useEffect(() => {
    (async () => {
      try {
        const { pageNumber, ...otherFilters } = filters;
        setLoading(true);
        const data: any = await getSims({
          pageNumber: pageNumber + 1,
          ...otherFilters,
        });
        if (pageNumber === 0) {
          setSims(data?.data);
        } else {
          setSims((sims) => [...sims, ...data?.data]);
        }
        setPageMeta(data?.meta?.page);
        const batchData: any = await getBatches();
        let batches: any = {};
        batchData.data.forEach(({ id, name }: any) => {
          batches[id] = name;
        });
        setBatches(batches);
      } finally {
        setLoading(false);
      }
    })();
  }, [filters]);

  const handleOpen = (sim?: any) => {
    setOpen(true);
    setSim(sim);
  };
  const handleClose = () => {
    setOpen(false);
    setSim(null);
  };

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setFilters({
      ...filters,
      pageNumber: newPage,
    });
  };

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilters({
      ...filters,
      pageNumber: 0,
      'filter[search]': search,
    });
  };

  const onCreate = () => {
    handleClose();
    setFilters({
      ...filters,
      pageNumber: 0,
    });
  }

  const onUpdate = (data: any) => {
    handleClose();
    const index = sims.findIndex((item: any) => item.id === data.id);
    if (index === -1) {
      return;
    }
    setSims([...fill(sims, data, index, index + 1)])
  }

  return (
    <div>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={2}
        mt={2}
        ml={3}
        mr={3}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Apps fontSize='large' />
          <Button variant='contained' onClick={() => handleOpen()}>
            Add SIMs
          </Button>
        </Box>
        <AccountCircle fontSize='large' />
      </Box>
      <Divider />
      <Box mt={2} ml={4} mr={4} sx={{ position: 'relative' }}>
        <form onSubmit={onSearch}>
          <TextField
            placeholder='ICCID or IMSI'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {!Boolean(sims.length) && !loading && (
          <Typography mt={3}>No sims available!</Typography>
        )}
        {loading && <Typography mt={3}>Loading...</Typography>}
        {!loading && Boolean(sims.length) && (
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sims
                .slice(
                  filters.pageNumber * filters.pageSize,
                  filters.pageNumber * filters.pageSize + 10
                )
                .map((sim, index) => (
                  <TableRow key={index}>
                    <TableCell>{sim.iccid}</TableCell>
                    <TableCell>{sim.imsi}</TableCell>
                    <TableCell>{batches[sim.batchId] ?? sim.batchId}</TableCell>
                    <TableCell>
                      <Chip variant="outlined" color={sim.isActive ? 'success' : 'error'} label={sim.isActive ? 'ACTIVE' : 'INACTIVE'} />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleOpen({
                        batchName: batches[sim.batchId],
                        ...sim
                      })}>
                        <MoreHoriz />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={pageMeta.total}
                  rowsPerPage={filters.pageSize}
                  page={filters.pageNumber}
                  onPageChange={handleChangePage}
                  rowsPerPageOptions={[]}
                />
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </Box>
      <Modal open={open} onClose={handleClose}>
        {Boolean(sim) ? (
          <SimForm data={sim} onCancel={handleClose} onSubmit={onUpdate} />
        ) : (
          <BatchForm onCancel={handleClose} onSubmit={onCreate} />
        )}
      </Modal>
    </div>
  );
}

export default App;
