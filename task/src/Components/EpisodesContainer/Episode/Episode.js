import React from 'react';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../Routing/AppRoutes";

const Episode = ({episode}) => {

    const navigate = useNavigate();
    const {name, air_date, episode: episodeName, characters} = episode;

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        // navigate(`/character`, {state: {ids}})
        navigate(AppRoutes.CHARACTERS, {state: {ids}})
    }

    return (
        <Box sx={{ width: 275, height: 300 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Episode
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {episodeName}
                    </Typography>
                    <Typography variant="body2">
                        {air_date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant={'contained'} onClick={toCharacters}>Characters</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Episode;