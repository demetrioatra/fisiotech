import {
    Card,
    Typography
  } from '@mui/material';
import PropTypes from 'prop-types';
import HelpIcon from '@mui/icons-material/Help';

Painel.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sx: PropTypes.object
  };

export default function Painel({title, total, sx, ...other}) {
    return (
        <Card
            sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',
                ...sx,
            }}
            {...other}>
            <HelpIcon />

            <Typography variant="h3">
                {total}
            </Typography>

            <Typography variant="subtitle2">
                {title}
            </Typography>
        </Card>
    )
}