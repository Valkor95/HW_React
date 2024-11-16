import React from 'react';
import {Box} from "@mui/material";
import ContainerImg from "../components/ContainerImg.jsx";
import ButtonFetch from "../components/ButtonFetch.jsx";
import DataCard from "../components/DataCard.jsx";

function MainPage(props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                gap: 2,
                padding: 2,
            }}
        >
            <ContainerImg/>
            <ButtonFetch/>
            <DataCard/>
        </Box>
    );
}

export default MainPage;