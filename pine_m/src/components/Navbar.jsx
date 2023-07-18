import React from 'react'
import styled from '@emotion/styled'
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';



export const Navbar = () => {
    const MyToolbar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: "space-between",
    }))
    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'black.main' }}>
            <Container>
                <MyToolbar>
                    <Box component="img" src='logoWhite.svg' sx={{ height: { xs: 35, sm: 40 } }} >
                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: -1, display: { xs: "block", sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack direction="row" spacing={2} sx={{
                        display: { xs: 'none', sm: 'block' }
                    }}>
                        <Button  >Services</Button>
                        <Button>Prices</Button>
                        <Button variant='outlined'>Contact</Button>
                    </Stack>

                </MyToolbar>
            </Container>
        </AppBar >
    )
}
