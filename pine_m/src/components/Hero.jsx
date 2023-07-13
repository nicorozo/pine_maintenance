import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export const Hero = () => {
    return (
        <Box
            sx={{
                display: 'block',
                height: '100vh',
                backgroundColor: 'black',
                backgroundImage: {
                    md: 'url(https://media.istockphoto.com/id/1278128473/pl/zdj%C4%99cie/rathbone-square-biuro-na-facebooku.jpg?s=2048x2048&w=is&k=20&c=GiZg4hgyx2nvDJHRiIlKFQ19cWnYkZoONo_01MH7bHs=)',
                    xs: 'linear-gradient(to left, rgba(10,10,10,0.6) -26.48%, rgba(0,0,0,0.6) 73.52%),url(https://media.istockphoto.com/id/1267724033/pl/zdj%C4%99cie/zielony-dziedziniec-mi%C4%99dzy-nowoczesnymi-biurowcami-w-berlinie.jpg?s=2048x2048&w=is&k=20&c=qL5rxKUwOAfPua_laI_Z6wQEAaiPNpon0iUyfYTxzHU=)'
                },
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 100%',
                paddingTop: '50%'
            }}
        >
            <Container sx={
                {
                    paddingBottom: '2rem',
                    textAlign: 'left'
                }
            }>
                <Typography variant='h5' component="h1" sx={{
                    fontWeight: '700', color: 'white', mb: '2rem'
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                    <Typography variant='h5' color="secondary" component="span"
                        sx={{
                            fontWeight: '700', textAlign: 'left',
                        }}
                    >Dignissimos, quam in aspernatur</Typography>
                </Typography>

                <Typography variant='h6' mb={20}>
                    Some more text just to fill up this thing.
                </Typography>

                <Button variant="contained" color="secondary" sx={{ paddingY: 2 }} fullWidth={true}>Start/Contact</Button>
            </Container>
        </Box >
    )
}
