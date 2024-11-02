import React from 'react';
import {Card, CardContent, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function CardContacts({user}) {
    return (
        <Container >
            <Card>
                <CardContent>
                    <Box>
                        <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
                        <Typography variant="body1"><strong>Phone:</strong> {user.phone}</Typography>
                        <Typography variant="body1"><strong>Website:</strong> {user.website}</Typography>
                        <Typography variant="body1"><strong>Company:</strong> {user.company.name}</Typography>
                        <Typography variant="body1"><strong>Address:</strong> {user.address.street}, {user.address.city}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default CardContacts;