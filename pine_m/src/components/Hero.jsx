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
        position: 'relative',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'linear-gradient(180deg, rgba(20, 20, 20, 0.68) 0%, rgba(56, 56, 56, 0.12) 41.79%, rgba(19, 19, 19, 0.80) 100%),url(https://media.istockphoto.com/id/488113800/pl/zdj%C4%99cie/zielony-square-przed-budynek-biurowy.jpg?s=2048x2048&w=is&k=20&c=tJH4TcQoRh1wsI0VhHICzQ9UbzK5fJdDdX08N36EmZw=)',

        }
    }))

    const CustomBox = styled(Box)(({ theme }) => ({
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            bottom: '10%',
        },
        [theme.breakpoints.down("md")]: {
            bottom: '15%',
        },
        [theme.breakpoints.up("lg")]: {
            bottom: '10%',
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

    const MainButton = styled(Button)(({ theme }) => ({
        p: 1.5,
        backgroundColor: theme.palette.black.main,
        width: 200, color: theme.palette.primary.main,
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        }
    }))
    return (
        <HeroBox >
            <Navbar />
            <Container sx={{}}>
                <CustomBox>
                    <Title component='h1'>First part of the Title <br />
                        <Box component='span' color="secondary.main">Another part In Color.</Box>
                    </Title>
                    <Typography component='p' variant='h6' color='primary' fontWeight="200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime?
                    </Typography>
                    <MainButton variant='contained'>
                        Contact
                    </MainButton>
                </CustomBox>
            </Container>
        </HeroBox>
    )
}
