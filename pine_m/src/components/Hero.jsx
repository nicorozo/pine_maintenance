import styled from '@emotion/styled'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from './Navbar'




export const Hero = () => {

    const HeroBox = styled(Box)(({ theme }) => ({
        backgroundImage: 'linear-gradient(180deg, rgba(20, 20, 20, 0.68) 0%, rgba(56, 56, 56, 0.12) 41.79%, rgba(19, 19, 19, 0.80) 100%),url(https://media.istockphoto.com/id/1402429994/pl/zdj%C4%99cie/%C5%9Bwie%C5%BCe-zielone-drzewa-i-biurowiec.jpg?s=2048x2048&w=is&k=20&c=JvEoKLpTBwhSaY0C1nNEXCqp9SI27K3X7aoJTyi-6f4=)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'linear-gradient(180deg, rgba(20, 20, 20, 0.68) 0%, rgba(56, 56, 56, 0.12) 41.79%, rgba(19, 19, 19, 0.80) 100%),url(https://media.istockphoto.com/id/488113800/pl/zdj%C4%99cie/zielony-square-przed-budynek-biurowy.jpg?s=2048x2048&w=is&k=20&c=tJH4TcQoRh1wsI0VhHICzQ9UbzK5fJdDdX08N36EmZw=)',

        }
    }))

    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(5),
        marginTop: theme.spacing(45),
        [theme.breakpoints.down("sm")]: {

        }
    }))

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: '5rem',
        fontWeight: '700',
        color: theme.palette.primary.main,
        lineHeight: theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            fontSize: '2.5rem',
            lineHeight: theme.spacing(5),
        },
    }))

    const mainButton = styled(Button)(({ theme }) => ({
        width: '100'
    }))
    return (
        <HeroBox>
            <Container sx={{ position: 'relative' }}>
                <Navbar />
                <CustomBox>
                    <Title component='h1'>First part of the Title <br />
                        <Box component='span' color="secondary.main">Another part In Color.</Box>
                    </Title>
                    <Typography component='p' variant='h6' color='primary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime?
                    </Typography>
                    <Button variant='contained' sx={{ p: 1.5, bgcolor: 'secondary.main' }} >
                        Contact
                    </Button>
                </CustomBox>
            </Container>
        </HeroBox>
    )
}
