"use client"

import { Context } from "@/helpers/Context";
import axios, { AxiosResponse } from "axios";
import { useContext, useState } from "react";


export default function Landing() {

    const { setPotionList, isDataLoaded } = useContext(Context);

    async function getPotions() {

        console.log("Click en boton")
        try{
            const potionList = await axios.get("https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js")
            setPotionList(potionList.data);

            console.log(potionList.data);
            isDataLoaded(true);

        }catch (error){
            console.log(error)
        }
    }

    return(
        <div className="visible mt-20">
            <h1>LAS POCIMAS REBELDES</h1>
            <button onClick={getPotions}>
                Enter
            </button>
      </div>
    )
}