import React, { useState, useMemo } from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import { animals } from '../constants/animals';
import { LayoutContainer } from '../components/LayoutContainer';
import { Box, Button, Typography } from '@mui/material';

const Dashboard = () => {
  const history = useHistory();
  const location = useLocation();
  const currentPage = useMemo(
    () => new URLSearchParams(location.search).get('page'),
    [location.search],
  );

  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);

  const handleReturnToLogin = () => {
    history.push('/login');
  };

  const changePage = (newPage: number) => {
    if (newPage > animals.length || newPage === 0) return;

    history.replace(`${location.pathname}?page=${newPage}`);
    setPage(newPage);
  };

  return (
    <LayoutContainer>
      {animals.map((animal) => (
        <div style={{ marginBottom: '1rem' }}>
          <Link to={`/dashboard/${animal.id}`}>
            Let's check a {animal.name}
          </Link>
        </div>
      ))}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2rem',
        }}
      >
        <Button
          size='small'
          color='primary'
          onClick={() => changePage(page - 1)}
        >
          Last page
        </Button>
        <Typography component='h4' variant='h4'>
          {page}
        </Typography>
        <Button
          size='small'
          color='primary'
          onClick={() => changePage(page + 1)}
        >
          Next page
        </Button>
      </Box>
      <Button
        style={{ marginTop: '2rem' }}
        color='secondary'
        onClick={handleReturnToLogin}
      >
        Return to login
      </Button>
    </LayoutContainer>
  );
};

export default Dashboard;
