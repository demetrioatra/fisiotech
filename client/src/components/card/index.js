import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent
} from '@mui/material'
import PropTypes from 'prop-types'

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTrafficBySite({title, list, ...other}) {
  return (
    <Card {...other}>
      <CardHeader title={title} />
      <CardContent>
        <Box
          sx={{
            gap: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)'
          }}
        >
          {list.map((site) => (
            <Paper key={site.name}
              variant="outlined"
              sx={{
                py: 2.5,
                textAlign: 'center'
              }}
            >

            <Typography variant="h6">{site.value}</Typography>

            <Typography variant="body2" 
              sx={{color: 'text.secondary'}}>
              {site.name}
            </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}