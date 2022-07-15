import React, {useEffect, useState} from "react";
import { bottomNavigationClasses, Grid } from "@mui/material";
import Paper from "@mui/material";

export default function Cards(){
    const [cards, setCards] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/home')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return(
        <div>
            <Grid container>
                <Grid item>
                    <Paper>1</Paper>
                </Grid>
                <Grid item>
                    <Paper>2</Paper>
                </Grid>
                <Grid item>
                    <Paper>3</Paper>
                </Grid>
                <Grid item>
                    <Paper>4</Paper>
                </Grid>
            </Grid>
            {cards.map(card =>{
                <p key={card.id}>{card.title}</p>
            })}
        </div>
    )

}

