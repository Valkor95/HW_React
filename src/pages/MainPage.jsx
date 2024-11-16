import React from 'react';
import {Box} from "@mui/material";
import ContainerImg from "../components/ContainerImg.jsx";
import ButtonFetch from "../components/ButtonFetch.jsx";
import DataCard from "../components/DataCard.jsx";
import img from '../assets/img/sw.png';
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
            <ContainerImg
                src={img}
                alt="SW"
                width="400px"
                height="400px"
            />
            <ButtonFetch/>
            <DataCard/>
        </Box>
    );
}

export default MainPage;