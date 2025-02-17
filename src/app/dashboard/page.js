import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Box } from '@mui/material';

const InsumosTable = () => {
  return (
    <Box sx={{ overflowX: 'auto', px: 6, py: 10 }}> 
    
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sector</TableCell>
              <TableCell>Área</TableCell>
              <TableCell>Técnico</TableCell>
              <TableCell>Produtores</TableCell>
              <TableCell colSpan={2}>Semente X</TableCell>
              <TableCell colSpan={2}>Semente Y</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Distribuídos</TableCell>
              <TableCell>Recebidos</TableCell>
              <TableCell>Distribuídos</TableCell>
              <TableCell>Recebidos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Lalaue</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>2</TableCell>
              <TableCell>0</TableCell>
              <TableCell>70.00</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Melema</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>3</TableCell>
              <TableCell>0</TableCell>
              <TableCell>90.00</TableCell>
              <TableCell>0</TableCell>
              <TableCell>132.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ribaue</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell>5</TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>160.00</TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>132.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default InsumosTable;