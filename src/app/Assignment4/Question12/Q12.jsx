'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from '@mui/material';

const sampleData = [
  { id: 1, name: 'GG', age: 25, city: 'Earth141' },
  { id: 2, name: 'Goku', age: 30, city: 'Mars111' },
  { id: 3, name: 'Vegeta', age: 22, city: 'Earth142' },
  { id: 4, name: 'Pikalo', age: 28, city: 'Nameek' },
  { id: 5, name: 'Super Dragon', age: 35, city: 'Kai land' },
  { id: 6, name: 'Supreme Leader', age: 29, city: 'North Korea' },
  { id: 7, name: 'Gohan', age: 33, city: 'Goku Place' },
  { id: 8, name: 'Tanjiro', age: 27, city: 'Kamado dojo' },
];

export default function DataTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0); // Reset to page 0 when rows per page change
  };

  // Paginated data
  const paginatedRows = sampleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['name', 'age', 'city'].map((column) => (
                  <TableCell key={column}>{column.charAt(0).toUpperCase() + column.slice(1)}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={sampleData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10]}
        />
      </Paper>
    </Box>
  );
}
