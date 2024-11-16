import React from 'react';
import {Box} from "@mui/material";
import ContainerImg from "../components/ContainerImg.jsx";
import ButtonFetch from "../components/ButtonFetch.jsx";
import DataCard from "../components/DataCard.jsx";

function MainPage(props) {
    return (
        <Box>
            <ContainerImg/>
            <ButtonFetch/>
            <DataCard/>
        </Box>
    );
}

export default MainPage;