import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AnaliseProgresso = () => {
  const rows = [
    { col1: 'Linha 1 Coluna 1', col2: 'Linha 1 Coluna 2', col3: 'Linha 1 Coluna 3', col4: 'Linha 1 Coluna 4', col5: 'Linha 1 Coluna 5', col6: 'Linha 1 Coluna 6' },
    { col1: 'Linha 2 Coluna 1', col2: 'Linha 2 Coluna 2', col3: 'Linha 2 Coluna 3', col4: 'Linha 2 Coluna 4', col5: 'Linha 2 Coluna 5', col6: 'Linha 2 Coluna 6' },
    { col1: 'Linha 3 Coluna 1', col2: 'Linha 3 Coluna 2', col3: 'Linha 3 Coluna 3', col4: 'Linha 3 Coluna 4', col5: 'Linha 3 Coluna 5', col6: 'Linha 3 Coluna 6' },
    { col1: 'Linha 4 Coluna 1', col2: 'Linha 4 Coluna 2', col3: 'Linha 4 Coluna 3', col4: 'Linha 4 Coluna 4', col5: 'Linha 4 Coluna 5', col6: 'Linha 4 Coluna 6' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="tabela simples">
        <TableHead>
          <TableRow>
            <TableCell>Coluna 1</TableCell>
            <TableCell align="right">Coluna 2</TableCell>
            <TableCell align="right">Coluna 3</TableCell>
            <TableCell align="right">Coluna 4</TableCell>
            <TableCell align="right">Coluna 5</TableCell>
            <TableCell align="right">Coluna 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.col1}
              </TableCell>
              <TableCell align="right">{row.col2}</TableCell>
              <TableCell align="right">{row.col3}</TableCell>
              <TableCell align="right">{row.col4}</TableCell>
              <TableCell align="right">{row.col5}</TableCell>
              <TableCell align="right">{row.col6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnaliseProgresso;