import React from 'react';
import Grid from "@mui/material/Grid2";
import ContainerImg from "../components/ContainerImg.jsx";
import ButtonFetch from "../components/ButtonFetch.jsx";
import DataCard from "../components/DataCard.jsx";
import img from '../assets/img/sw.png';
function MainPage(props) {
    return (
        <Grid
            container
            spacing={2}
            direction='column'
            justifyContent="center"
            alignItems="center"
            sx={{
                minHeight: "100vh",
                padding: 2,
            }}
        >
            <Grid item xs={12} sm={6} md={4}>
                <ContainerImg
                    src={img}
                    alt="SW"
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <ButtonFetch />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <DataCard />
            </Grid>
        </Grid>
    );
}

export default MainPage;