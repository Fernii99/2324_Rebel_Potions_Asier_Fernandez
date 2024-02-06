"use client"

import { Context } from "@/helpers/Context";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import dice1 from '../assets/dado1.png';
import dice2 from '../assets/dado2.png';
import dice3 from '../assets/dado3.png';
import dice4 from '../assets/dado4.png';
import dice5 from '../assets/dado5.png';
import dice6 from '../assets/dado6.png';

import potion from '../assets/potion.png';
import poison from '../assets/poison.png';


export default function LaunchBattle(){

    //Global State Potion Information
    const { PotionList, Player1, setPlayer1, Player2, setPlayer2, gameEnd, isGameEnd } = useContext(Context);
   
    //Array With the dice images path
    const diceNumbers = [dice1.src, dice2.src, dice3.src, dice4.src, dice5.src, dice6.src];
    
    //Random number generation function
    function getRandomDiceNumber(){
        return  Math.floor(Math.random() * (6 - 0 + 1) + 1); 
    }
    //Random Number generation for the potion
    function getRandomPotionNumber(){
        return  Math.floor(Math.random() * (100 - 0 + 1) + 0); 
    }

    function configPlayer1() {
        const player = {
            'dice': getRandomDiceNumber(),
            'potion': PotionList[getRandomPotionNumber()]
        }
        setPlayer1(player);
    }

    function configPlayer2() {
        const player = {
            'dice': getRandomDiceNumber(),
            'potion': PotionList[getRandomPotionNumber()]
        }
        setPlayer2(player);
    }

    useEffect(()=> {
        configPlayer1();
        configPlayer2();

        if(Player1.potion.curative === Player2.potion.curative){
            configPlayer1();
            configPlayer2();
        }
     }, [])

    

    function playGame() {
        try{
            console.log("batalla")
            isGameEnd(true);
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <div className="flex flex-row w-screen h-96 mt-20">

            <div className="w-1/3 h-full bg-white mr-20 ml-20 p-5">
                <h1 className="text-black"> Pocion 1</h1>
                <Image src={diceNumbers[Player1.dice]} width={80} height={80} alt={"dicePicture"} />

                {/* POTION / POISON IMAGE */}
                {
                    Player1.potion.curative ? 
                        <Image src={potion.src} width={80} height={80} alt={"dicePicture"} />
                    :
                        <Image src={poison.src} width={80} height={80} alt={"dicePicture"} />
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

            <div className="w-1/3 h-full bg-white mr-20 ml-20 p-5">
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
            
            <div>
                <button className=" bg-white text-black p-5" onClick={playGame}>
                    LAUNCH BATTLE
                </button>
            </div>
        </div>
       
        


    )
}