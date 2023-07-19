import styled from "@emotion/styled"
import { Box, Container, ButtonGroup, Typography, Button } from "@mui/material"

export const Gallery = () => {

    const GalleryBox = styled(Box)(({ theme }) => ({
        height: '100vh',
        backgroundColor: theme.palette.primary.main
    }))

    const TextBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        padding: ' 2rem 0 ',
        gap: '1rem',
        borderBottom: "black dashed 1px",
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }
    }))
    const ContactBttn = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,



    }))

    return (
        <GalleryBox>
            <Container>
                <TextBox>

                    <Box flex={'1'} display={'flex'} flexDirection={'column'} gap={".5rem"} >
                        <Typography variant="h6">
                            Know your company
                        </Typography>
                        <Typography variant="h4">
                            Kacper Madeja
                        </Typography>
                        <ButtonGroup variant="text">
                            <ContactBttn>Wroclaw</ContactBttn>
                            <ContactBttn>CEO</ContactBttn>
                        </ButtonGroup>
                    </Box>

                    <Typography flex={'2'} variant='p' color={'gray.main'} fontFamily={'Roboto'} component={'p'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolores sapiente nemo animi similique illum a, saepe, necessitatibus aliquam obcaecati perferendis quaerat eos dolorem odit tenetur ipsam nesciunt!
                    </Typography>
                </TextBox>
                asda
            </Container>
        </GalleryBox>
    )
}
