import styled from "@emotion/styled"
import { Box, Container, Typography, Paper } from "@mui/material"

export const Locations = () => {

    const MainBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        borderTop: 'dashed 1px gray',
        padding: '2rem 0',
        gap: '2rem',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }
    }))
    const TextBox = styled(Box)(({ theme }) => ({
        flex: '1',
        gap: '1rem'

    }))
    const RightBox = styled(Box)(({ theme }) => ({
        flex: '1',

    }))
    const PaperBox = styled(Paper)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1.5rem'

    }))
    const MediaBox = styled(Box)(({ theme }) => ({
        backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.envato.com%2Ffiles%2F232829041%2Fgoogle-maps_screenshot_1.jpg&f=1&nofb=1&ipt=cbef99875c186a6252805726acbd195e6886fef6c0334c8220d468175da08017&ipo=images)',
        backgroundPosition: 'center',
        height: 200,

    }))
    const ImageBox = styled(Box)(({ theme }) => ({
        backgroundImage: 'url(https://media.istockphoto.com/id/877334106/pl/zdj%C4%99cie/nowoczesna-fasada-biurowc%C3%B3w.jpg?s=1024x1024&w=is&k=20&c=fctqyc-pFhKlQzTR7d6kL8_yAfMNM2Thcz_1N-pidyI=)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '400px',
        borderRadius: "5px"

    }))
    const SecondBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0',
        gap: '2rem',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }
    }))

    return (
        <Box sx={{ backgroundColor: 'primary.main' }}>
            <Container sx={{}}>
                <MainBox>
                    <TextBox>
                        <Box>
                            <Typography variant="p" component={'h5'} fontWeight={'400'}>Wrocław, LS</Typography>
                            <Typography variant="h6" component={'h5'} fontWeight={''}>Our Services</Typography>
                        </Box>
                        <Box>
                            <Typography variant="p" component={'p'} sx={{ fontFamily: 'Roboto', fontWeight: '200', color: 'gray.main' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil tenetur atque sint. Delectus vel nemo, odit modi ab, officia harum reprehenderit quae itaque provident illum necessitatibus expedita ex! Iusto laudantium quam assumenda repellat autem quas beatae aspernatur vitae. Maxime.
                            </Typography>
                        </Box>
                    </TextBox>
                    <RightBox>
                        <PaperBox>
                            <Typography variant="p" component={'p'} sx={{ fontFamily: 'Roboto', fontWeight: '500', color: 'black.main' }}>
                                Wrocław
                            </Typography>

                            <MediaBox />

                            <Typography variant="p" component={'p'} sx={{ fontFamily: 'Roboto', fontWeight: '100', color: 'gray.main' }}>
                                Street Address: 123 Main Street <br />
                                City: Anytown<br />
                                State/Province: Anystate<br />
                                Postal Code: 12345<br />
                                Country: Anyland<br />
                            </Typography>

                        </PaperBox>
                    </RightBox>
                </MainBox>
                <SecondBox >
                    <Box flex={'1'} display={{ xs: 'none', md: 'block' }}>

                        <ImageBox />

                    </Box>

                    <TextBox>
                        <Box>

                            <Typography variant="h6" component={'h5'} fontWeight={''}>
                                About Us
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="p" component={'p'} sx={{ fontFamily: 'Roboto', fontWeight: '200', color: 'gray.main' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil tenetur atque sint. Delectus vel nemo, odit modi ab, officia harum reprehenderit quae itaque provident illum necessitatibus expedita ex! Iusto laudantium quam assumenda repellat autem quas beatae aspernatur vitae. Maxime.
                            </Typography>
                        </Box>
                    </TextBox>
                </SecondBox>
            </Container>
        </Box>
    )
}
