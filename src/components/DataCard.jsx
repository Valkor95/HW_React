import React from 'react';
import {Card, CardContent, Typography, useTheme} from "@mui/material";
import {useSelector} from "react-redux";

function DataCard(props) {
    const {data} = useSelector((state) => state.SWData)

    return (data && data.length > 0 ? (
            data.map((item) =>
                <Card
                    key={`${Date.now()}||${item.name}`}
                    sx={{
                        width: 300,
                        margin: 'auto',
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: '#efeeee',
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
                            Rotation period: {item.rotation_period}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Diameter: {item.diameter}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Climate: {item.climate}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Terrain: {item.terrain}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Population: {item.population}
                        </Typography>
                    </CardContent>
                </Card>
            )) : (
            <Typography variant="h5">There are no data!</Typography>
        )
    );
}

export default DataCard;