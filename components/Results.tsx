"use client"

import { Context } from "@/helpers/Context";
import { useContext } from "react";
import Image from "next/image";

import dice1 from '../assets/dado1.png';
import dice2 from '../assets/dado2.png';
import dice3 from '../assets/dado3.png';
import dice4 from '../assets/dado4.png';
import dice5 from '../assets/dado5.png';
import dice6 from '../assets/dado6.png';

import potion from '../assets/potion.png';
import poison from '../assets/poison.png';


export default function Results() {

    const { Player1, Player2, isGameEnd } = useContext(Context);

    const diceNumbers = [dice1.src, dice2.src, dice3.src, dice4.src, dice5.src, dice6.src];

    const ResultPotionPlayer1 = (((Player1.dice * 0.1) * Player1.potion.power) / Player1.potion.mana);
    const ResultPotionPlayer2 = (((Player2.dice * 0.1) * Player2.potion.power) / Player2.potion.mana);

    function playAgain(){
        isGameEnd(false);
    }

    return(
        <div className="flex flex-row w-screen h-80 mt-20">
            <div className="w-1/3 h-full bg-white mr-20 ml-20">
            <div className=" flex flex-row mt-4 justify-center">
             {
               ResultPotionPlayer1 > ResultPotionPlayer2 ? 
               <h1 className="text-black"> Winner Potion</h1>
                :
                <h1 className="text-black">Loser Potion</h1>
             }
                {/* POTION / POISON IMAGE */}
              {
                Player1.potion.curative ? 
                    <Image src={potion.src} width={80} height={80} alt={"PotionPicture"} />
                :
                    <Image src={poison.src} width={80} height={80} alt={"PotionPicture"} />
            }
            </div>
            <div className=" flex flex-row mt-4 justify-center">
                <span className="text-black align-center flex justify-center" >Dice Result</span> <Image src={diceNumbers[Player1.dice]} width={80} height={80} alt={"dicePicture"} />
            </div>

            <div className=" flex flex-row mt-4 justify-center">
                <span className="text-black">{Player1.dice} X 0.1</span> <span className="text-black"> ={Math.round((Player1.dice * 0.1)*100)/100}</span>
            </div>

            <div className=" flex flex-row mt-4 justify-center">
                <span className="text-black">Total Score</span>
            </div>
            <div className=" flex flex-row mt-4 justify-center">
            <span className="text-black">{Math.round(((Player1.dice * 0.1) * 100) / 100)} X {Player1.potion.power} / {Player1.potion.mana} = {Math.round(ResultPotionPlayer1 * 10) /10}</span>
            </div>
               
            
        </div>

        <div className="w-1/3 h-full bg-white mr-20 ml-20">
            <div className=" flex flex-row mt-4 justify-center">
                {
                ResultPotionPlayer1 < ResultPotionPlayer2 ? 
                <h1 className="text-black"> Winner Potion</h1>
                    :
                    <h1 className="text-black">Loser Potion</h1>
                }
                    {/* POTION / POISON IMAGE */}
                {
                    Player1.potion.curative ? 
                        <Image src={potion.src} width={80} height={80} alt={"PotionPicture"} />
                    :
                        <Image src={poison.src} width={80} height={80} alt={"PotionPicture"} />
                }
                </div>
                <div className=" flex flex-row mt-4 justify-center">
                <span className="text-black align-center flex justify-center" >Dice Result</span> <Image src={diceNumbers[Player2.dice]} width={80} height={80} alt={"dicePicture"} />
            </div>

            <div className=" flex flex-row mt-4 justify-center">
                <span className="text-black">{Player2.dice} X 0.1</span> <span className="text-black"> ={Math.round((Player2.dice * 0.1)*100)/100}</span>
            </div>

            <div className=" flex flex-row mt-4 justify-center">
                <span className="text-black">Total Score</span>
            </div>
            <div className=" flex flex-row mt-4 justify-center">
                <span className="text-black">{Math.round(((Player2.dice * 0.1) * 100) / 100)} X {Player2.potion.power} / {Player2.potion.mana} = {Math.round(ResultPotionPlayer2 * 10) /10}</span>
            </div>
        </div>
        <div>
                <button className=" bg-white text-black p-5" onClick={playAgain}>
                    LAUNCH BATTLE
                </button>
            </div>

       
    </div>
    )
}