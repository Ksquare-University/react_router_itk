import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { LayoutContainer } from '../components/LayoutContainer';
import { animals } from '../constants/animals';

const AnimalView = () => {
  const params = useParams<{ id: string }>();
  const history = useHistory();
  const currentAnimal = animals.find((animal) => params.id === animal.id);

  const handleReturnToDashboard = () => {
    history.push('/dashboard');
  };

  if (!currentAnimal) return <Redirect to='/dashboard' />;
  return (
    <LayoutContainer>
      {
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='140'
            image={currentAnimal.imageSrc}
            style={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {currentAnimal.name}
            </Typography>
          </CardContent>
        </Card>
      }

      <Button
        style={{ marginTop: '2rem' }}
        color='primary'
        onClick={handleReturnToDashboard}
      >
        Return to dashboard
      </Button>
    </LayoutContainer>
  );
};

export default AnimalView;
