import {
    Card,
    Typography
  } from '@mui/material';
import PropTypes from 'prop-types';

Painel.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sx: PropTypes.object
  };

export default function Painel({title, total, sx, ...other}) {
    return (
        <Card
            variant='outlined'
            sx={{
                py: 4,
                textAlign: 'center',
                width: '198px',
                ...sx,
            }}
            {...other}>

            <Typography variant='h3'>{total}</Typography>

            <Typography variant='subtitle2'>
                {title}
            </Typography>
        </Card>
    )
}