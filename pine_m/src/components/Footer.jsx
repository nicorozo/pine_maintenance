import styled from "@emotion/styled"
import { Box, Container, Typography, Input } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const Footer = () => {
    const FooterBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.black.main,
        color: theme.palette.primary.main
    }))
    const MyInput = styled(Input)(({ theme }) => ({
        color: theme.palette.primary.main,
        border: '1px solid gray',

    }))
    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        padding: '1.2rem 0',
        gap: theme.spacing(3),
    }))
    return (
        <FooterBox>
            <Container>
                <CustomBox>
                    <Box flex={'1'} display={'flex'} flexDirection={'column'} gap={3}>
                        <Typography variant="h5" component={'p'} >Stay in Touch</Typography>
                        <Box position={'relative'} >
                            <MyInput placeholder="Email address" fullWidth sx={{ paddingLeft: '5px' }} />
                            <ArrowForwardIcon sx={{
                                position: "absolute", right: '5px', top: '5px'
                            }} />
                        </Box>
                    </Box>
                    <Box flex={'1'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box component="img" src='logoWhite.svg'
                            sx={{ height: { xs: 45, sm: 60 } }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </FooterBox>
    )
}
