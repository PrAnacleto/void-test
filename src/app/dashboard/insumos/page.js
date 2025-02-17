'use client';
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import apiClient from '@/app/helpers/apiClient';

const InsumosTable = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchFarmInputs = async () => {
      try {
        const response = await apiClient.get(
          '/analytics/farm-inputs/23e9336a-b20a-4478-a58f-875cc065e871',
          {
            params: {
              offset: 1,
              limit: 10,
              filter: '',
              phase: 'nurseries',
            },
          }
        );
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setError('Dados inválidos retornados pela API.');
        }
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError('Ocorreu um erro ao carregar os dados.');
        setLoading(false);
      }
    };
    fetchFarmInputs();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6">Carregando...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!data || !data.sectors || !data.inputsColumns) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="warning">Nenhum dado disponível.</Typography>
      </Box>
    );
  }

  if (isSmallScreen) {
    return (
      <Box sx={{ p: 2 }}>
        {data.sectors.map((sector, index) => ( 
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Setor: {sector.name}
              </Typography>
              <Typography>Produtores: {sector.totalFarmers}</Typography>
              <Typography>Área: -</Typography>
              <Typography>Técnico: -</Typography>
              <Typography variant="subtitle2" gutterBottom>
                Pacotes:
              </Typography>
              {data.inputsColumns.map((column, colIndex) => { 
                const packageData = sector.packages.find((pkg) => pkg.name === column);
                return (
                  <React.Fragment key={colIndex}>
                    <Typography>{column}:</Typography>
                    <Typography>
                      Distribuídos: {packageData?.sent || 0}
                    </Typography>
                    <Typography>
                      Recebidos: {packageData?.received || 0}
                    </Typography>
                  </React.Fragment>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ overflowX: 'auto', px: 2, py: 4 }}>
      <Paper elevation={3}>
        <Table size="small" aria-label="tabela de insumos">
          <TableHead>
            <TableRow>
              <TableCell>Sector</TableCell>
              <TableCell>Área</TableCell>
              <TableCell>Técnico</TableCell>
              <TableCell>Produtores</TableCell>
              {data.inputsColumns.map((column, colIndex) => ( 
                <TableCell align="center" colSpan={2} key={colIndex}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              {data.inputsColumns.flatMap((column, colIndex) => [ 
                <TableCell key={`${colIndex}-distribuidos`}>Distribuídos</TableCell>,
                <TableCell key={`${colIndex}-recebidos`}>Recebidos</TableCell>,
              ])}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Linhas de dados */}
            {data.sectors.map((sector, rowIndex) => ( 
              <TableRow key={rowIndex}>
                <TableCell>{sector.name}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>{sector.totalFarmers}</TableCell>
                {data.inputsColumns.map((column, colIndex) => { 
                  const packageData = sector.packages.find((pkg) => pkg.name === column);
                  return (
                    <>
                      <TableCell key={`${rowIndex}-${colIndex}-distribuidos`}>
                        {packageData ? packageData.sent : 0}
                      </TableCell>
                      <TableCell key={`${rowIndex}-${colIndex}-recebidos`}>
                        {packageData ? packageData.received : 0}
                      </TableCell>
                    </>
                  );
                })}
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">
                Total
              </TableCell>
              <TableCell>
                {data.sectors.reduce((total, sector) => total + sector.totalFarmers, 0)}
              </TableCell>
              {data.inputsColumns.flatMap((column, colIndex) => {
                const totalSent = data.sectors.reduce((sum, sector) => {
                  const packageData = sector.packages.find((pkg) => pkg.name === column);
                  return sum + (packageData?.sent || 0);
                }, 0);
                const totalReceived = data.sectors.reduce((sum, sector) => {
                  const packageData = sector.packages.find((pkg) => pkg.name === column);
                  return sum + (parseFloat(packageData?.received) || 0);
                }, 0);
                return [
                  <TableCell key={`total-${colIndex}-distribuidos`}>{totalSent}</TableCell>,
                  <TableCell key={`total-${colIndex}-recebidos`}>
                    {totalReceived.toFixed(2)}
                  </TableCell>,
                ];
              })}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default InsumosTable;