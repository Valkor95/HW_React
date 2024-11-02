import React from 'react';
import {Card, CardContent, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function AboutMe({info}) {
    return (
        <Container >
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Валерій Коровін
                    </Typography>
                    <Box>
                        <Typography variant="h5"><strong>Title:</strong> {info.title}</Typography>
                        <br/>
                        <Typography variant="body1">{info.body}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default AboutMe;