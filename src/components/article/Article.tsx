import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import {useNavigate} from "react-router-dom";

const Value = styled(Typography)`
  align-self: center;
  margin-left: auto;
  padding: 0 8px;
`;

export type ArticleProps = {
  author: string;
  url: string;
  image: string;
  traffic: number;
  id: string;
  isClickDisabled?: boolean
};

export const Article = ({ author, url, image, traffic, id, isClickDisabled }: ArticleProps) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ display: 'flex', mb: 1, paddingRight: '6px',
      cursor: `${!isClickDisabled ? 'pointer' : ''}`, pointerEvents: `${isClickDisabled && 'none'}`}}
          variant='outlined' onClick={() => navigate(`/article/${id}`)}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={ image }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { url }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            { author }
          </Typography>
        </CardContent>
      </Box>
      <Value variant="h4">
            { traffic }
      </Value>
    </Card>
  );
}
