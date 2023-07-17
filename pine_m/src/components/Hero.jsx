import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from './Navbar'

export const Hero = () => {

    const HeroBox = styled(Box)(({ theme }) => ({
        backgroundImage: 'url(https://media.istockphoto.com/id/1402429994/pl/zdj%C4%99cie/%C5%9Bwie%C5%BCe-zielone-drzewa-i-biurowiec.jpg?s=2048x2048&w=is&k=20&c=JvEoKLpTBwhSaY0C1nNEXCqp9SI27K3X7aoJTyi-6f4=)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url(https://media.istockphoto.com/id/488113800/pl/zdj%C4%99cie/zielony-square-przed-budynek-biurowy.jpg?s=2048x2048&w=is&k=20&c=tJH4TcQoRh1wsI0VhHICzQ9UbzK5fJdDdX08N36EmZw=)',

        }
    }))

    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'left',
        gap: theme.spacing(5),
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {

        }
    }))
    return (
        <HeroBox>
            <Container>
                <Navbar />
                <CustomBox>
                    <Box sx={{
                        maxWidth: '50%'
                    }}>
                        <Typography variant='h1'>Title</Typography>
                    </Box>

                </CustomBox>
            </Container>
        </HeroBox>
    )
}
