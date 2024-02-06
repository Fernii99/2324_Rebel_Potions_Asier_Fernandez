"use client"

import { Context } from "@/helpers/Context";
import { useContext, useState } from "react";
import Image from "next/image";


import dice1 from '../assets/dado1.png';
import dice2 from '../assets/dado2.png';
import dice3 from '../assets/dado3.png';
import dice4 from '../assets/dado4.png';
import dice5 from '../assets/dado5.png';
import dice6 from '../assets/dado6.png';

import potion from '../assets/potion.png';
import poison from '../assets/poison.png';


export default function results() {

    const { PotionList, Player1, setPlayer1, Player2, setPlayer2 } = useContext(Context);

    const diceNumbers = [dice1.src, dice2.src, dice3.src, dice4.src, dice5.src, dice6.src];


    return(
        <div className="flex flex-row w-screen h-80">
            <div className="w-1/3 h-full bg-white mr-20 ml-20">
            <h1 className="text-black"> Result for potion 1</h1>
            <Image src={diceNumbers[Player1.dice]} width={80} height={80} alt={"dicePicture"} />

            {/* POTION / POISON IMAGE */}
            {
                Player1.potion.curative ? 
                    <Image src={potion.src} width={80} height={80} alt={"PotionPicture"} />
                :
                    <Image src={poison.src} width={80} height={80} alt={"PotionPicture"} />
            }
            {Player1.potion == null ? 
                null
            :  <>
                <p className="text-black">Name: {Player1.potion.name}</p>
                <p className="text-black">Alias: {Player1.potion.alias}</p>
                <p className="text-black">Curative: {Player1.potion.curative ? "true" : "false"}</p>
                <p className="text-black">Power: {Player1.potion.power}</p> 
                <p className="text-black">Mana: {Player1.potion.mana}</p> 
            </>
            }

        </div>

        <div className="w-1/3 h-full bg-white mr-20 ml-20">
            <h1 className="text-black"> Pocion 2</h1>
            <Image src={diceNumbers[Player2.dice]} width={80} height={80} alt={"dicePicture"} />

            {/* POTION / POISON IMAGE */}
            {
                Player2.potion.curative ? 
                    <Image src={potion.src} width={80} height={80} alt={"dicePicture"} />
                :
                    <Image src={poison.src} width={80} height={80} alt={"dicePicture"} />
            }

            {Player1.potion == null ? 
                null
            :  <>
                <p className="text-black">Name: {Player2.potion.name}</p>
                <p className="text-black">Alias: {Player2.potion.alias}</p>
                <p className="text-black">Curative: {Player2.potion.curative ? "true" : "false"}</p>
                <p className="text-black">Power: {Player2.potion.power}</p> 
                <p className="text-black">Mana: {Player2.potion.mana}</p> 
            </>
            }
        </div>
    </div>
    )
}