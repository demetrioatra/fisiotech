import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

export default function Cards() {
    return (
        <Grid container style={{marginLeft: '280px'}}>
            <Card sx = { { minWidth: 250 } }>
                <CardContent>
                <Typography sx = { { fontSize: 14 } } color = "text.secondary" gutterBottom>
                    SUNDAY
                </Typography>
                <Typography variant = "h5" component = "div">
                    Média diaria atencao
                </Typography>
                <Typography sx = { { mb: 1.5 } } color="text.secondary">
                    adjective
                </Typography>
                <Typography variant = "body2">
                    well meaning and kindly.
                    <br />
                    { '"a benevolent smile"' }
                </Typography>
                </CardContent>
                <CardActions>
                <Button size = "small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx = { { minWidth: 250 } }>
                <CardContent>
                <Typography sx = { { fontSize: 14 } } color = "text.secondary" gutterBottom>
                    Monday
                </Typography>
                <Typography variant = "h5" component = "div">
                    Média diaria atencao
                </Typography>
                <Typography sx = { { mb: 1.5 } } color="text.secondary">
                    adjective
                </Typography>
                <Typography variant = "body2">
                    well meaning and kindly.
                    <br />
                    { '"a benevolent smile"' }
                </Typography>
                </CardContent>
                <CardActions>
                <Button size = "small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx = { { minWidth: 250 } }>
                <CardContent>
                <Typography sx = { { fontSize: 14 } } color = "text.secondary" gutterBottom>
                    TUESDAY
                </Typography>
                <Typography variant = "h5" component = "div">
                    Média diaria atencao
                </Typography>
                <Typography sx = { { mb: 1.5 } } color="text.secondary">
                    adjective
                </Typography>
                <Typography variant = "body2">
                    well meaning and kindly.
                    <br />
                    { '"a benevolent smile"' }
                </Typography>
                </CardContent>
                <CardActions>
                <Button size = "small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx = { { minWidth: 250 } }>
                <CardContent>
                <Typography sx = { { fontSize: 14 } } color = "text.secondary" gutterBottom>
                    WEDNESDAY
                </Typography>
                <Typography variant = "h5" component = "div">
                    Média diaria atencao
                </Typography>
                <Typography sx = { { mb: 1.5 } } color="text.secondary">
                    adjective
                </Typography>
                <Typography variant = "body2">
                    well meaning and kindly.
                    <br />
                    { '"a benevolent smile"' }
                </Typography>
                </CardContent>
                <CardActions>
                <Button size = "small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx = { { minWidth: 250 } }>
                <CardContent>
                <Typography sx = { { fontSize: 14 } } color = "text.secondary" gutterBottom>
                    THURSDAY
                </Typography>
                <Typography variant = "h5" component = "div">
                    Média diaria atencao
                </Typography>
                <Typography sx = { { mb: 1.5 } } color="text.secondary">
                    adjective
                </Typography>
                <Typography variant = "body2">
                    well meaning and kindly.
                    <br />
                    { '"a benevolent smile"' }
                </Typography>
                </CardContent>
                <CardActions>
                <Button size = "small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx = { { minWidth: 250 } }>
                <CardContent>
                <Typography sx = { { fontSize: 14 } } color = "text.secondary" gutterBottom>
                    FRIDAY
                </Typography>
                <Typography variant = "h5" component = "div">
                    Média diaria atencao
                </Typography>
                <Typography sx = { { mb: 1.5 } } color="text.secondary">
                    adjective
                </Typography>
                <Typography variant = "body2">
                    well meaning and kindly.
                    <br />
                    { '"a benevolent smile"' }
                </Typography>
                </CardContent>
                <CardActions>
                <Button size = "small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx = { { minWidth: 250 } }>
                <CardContent>
                <Typography sx = { { fontSize: 14 } } color = "text.secondary" gutterBottom>
                    SATURDAY
                </Typography>
                <Typography variant = "h5" component = "div">
                    Média diaria atencao
                </Typography>
                <Typography sx = { { mb: 1.5 } } color="text.secondary">
                    adjective
                </Typography>
                <Typography variant = "body2">
                    well meaning and kindly.
                    <br />
                    { '"a benevolent smile"' }
                </Typography>
                </CardContent>
                <CardActions>
                <Button size = "small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
