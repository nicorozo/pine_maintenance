import styled from "@emotion/styled"
import { Box, Container, ButtonGroup, Typography, Button } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import services from '../assets/servicesArray'


export const Gallery = () => {

    const GalleryBox = styled(Box)(({ theme }) => ({
        height: '',
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

    const ServicesBox = styled(Button)(({ theme }) => ({
        display: 'flex',
        gap: '2rem',
        padding: '2rem 0',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
            gap: '1rem'
        }
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
                            John Doe
                        </Typography>
                        <ButtonGroup variant="text">
                            <ContactBttn>Wroclaw</ContactBttn>
                            <ContactBttn>CEO</ContactBttn>
                        </ButtonGroup>
                    </Box>

                    <Typography flex={'2'} variant='p' color={'gray.main'} fontFamily={'Roboto'} component={'p'}>
                        Creating eco-friendly environments for businesses also fosters innovation and drives the development of new green technologies and practices. As companies strive to be more environmentally responsible, they invest in research and development, spurring advancements that benefit not only their operations but also society as a whole. This cycle of innovation can lead to new market opportunities and a competitive edge for businesses.
                    </Typography>
                </TextBox>

                <ServicesBox>
                    {services.map(item =>
                        <Card sx={{ flex: '1' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.img}
                                title={item.title}
                            />
                            <CardContent sx={{ textTransform: 'none' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textOverflow={'normal'}>
                                    {item.text}
                                </Typography>
                            </CardContent>

                        </Card>
                    )}

                </ServicesBox>
            </Container>
        </GalleryBox>
    )
}
