"use client"
import Landing from "@/components/Landing";
import LaunchBattle from "@/components/LaunchBattle";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import { Context } from "@/helpers/Context";
import Results from "@/components/Results";

export default function Home() {

    const [PotionList, setPotionList ] = useState([]);
    const [dataLoaded, isDataLoaded ] = useState(false);
    const [gameEnd, isGameEnd ] = useState(false);

    const [ Player1, setPlayer1 ] = useState({
        'dice': 0,
        'potion': {}
    });
    const [ Player2, setPlayer2 ] = useState({
        'dice': 0,
        'potion': {}
    });

    useEffect( () => {

    }, [gameEnd, dataLoaded])

    return(
    <Context.Provider value={{ PotionList, setPotionList, isDataLoaded, Player1, setPlayer1, Player2, setPlayer2, gameEnd, isGameEnd}}>
        <div className="w-screen"> 
        {
            dataLoaded ?
                <LaunchBattle />
            : 
                <Landing />
        }
        {/* {
            gameEnd && dataLoaded ?
                <Results />
            :
                <LaunchBattle />

        } */}
        </div>
    </Context.Provider>
    
    )

}
