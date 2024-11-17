import React from 'react';
import {Card, CardContent, Typography, useTheme} from "@mui/material";
import {useSelector} from "react-redux";

function DataCard(props) {
    const data = useSelector((state) => state.data)

    return (data && data.length > 0 ? (
            data.map((item) =>
                <Card
                    key={`${Date.now()}||${item.name}`}
                    sx={{
                        width: 300,
                        margin: 'auto',
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: '#424242',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '10px',
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5" component="div" gutterBottom>
                            {item.name}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            Сharacteristics
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Height: {item.height}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Mass: {item.mass}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Hair color: {item.hair_color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Skin color: {item.skin_color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Gender: {item.gender}
                        </Typography>
                    </CardContent>
                </Card>
            )) : (
        <Typography variant="h5">There are no data!</Typography>
            )
);
}

export default DataCard;