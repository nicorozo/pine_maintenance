import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Hero = () => {
    return (
        <Box
            sx={{
                display: 'block',
                height: '100vh',
                backgroundColor: 'black',
                backgroundImage: {
                    md: 'url(https://media.istockphoto.com/id/1278128473/pl/zdj%C4%99cie/rathbone-square-biuro-na-facebooku.jpg?s=2048x2048&w=is&k=20&c=GiZg4hgyx2nvDJHRiIlKFQ19cWnYkZoONo_01MH7bHs=)',
                    xs: 'url(https://media.istockphoto.com/id/1267724033/pl/zdj%C4%99cie/zielony-dziedziniec-mi%C4%99dzy-nowoczesnymi-biurowcami-w-berlinie.jpg?s=2048x2048&w=is&k=20&c=qL5rxKUwOAfPua_laI_Z6wQEAaiPNpon0iUyfYTxzHU=)'
                },
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 100%',
                paddingTop: '40%'
            }}
        >
            <Container sx={
                {
                    textAlign: 'center',
                    paddingBottom: '2rem'
                }
            }>
                <Typography variant='h2' component="h1" sx={{
                    fontFamily: 'roboto', fontWeight: '500',
                    mb: '2rem'
                }}>
                    Some Text To Replace
                </Typography>

                <Typography variant='p'>
                    Some more text just to fill up this thing.
                </Typography>

            </Container>
        </Box >
    )
}
