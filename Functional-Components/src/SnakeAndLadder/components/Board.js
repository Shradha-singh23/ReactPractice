import React, { useEffect, useState } from 'react';
import './Board.css';

const n = 6;
const matrixArray = [];

const ladderMap = {
    3: 11,
    5: 23,
    7:15,
    21:33,
    26:31
}
const snakeMap = {
    13: 6,
    9: 4,
    19: 2,
    34: 22,
    29: 16
}

function createMatrix() {
    let block = (n * n) + 1;
        for(let column=1;column<=n;column++){
            let rows = [];
                if (column % 2 === 0){
                    block = block - n;
                    let value = block;
                    for(let row=1;row<=n;row++){
                        rows.push(value);
                        value++;
                    }
                }else{
                    for(let row=1;row<=n;row++){
                    block = block - 1;
                    rows.push(block);
                    }
                }
            matrixArray.push(rows)
        };
}

createMatrix();

export default function Board(){
    const [diceValue, setDiceValue] = useState(0);
    const [playerValue, setPlayerValue] = useState(1);

    const roll = () => {
        const newDiceValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newDiceValue);
    }

    useEffect(() => {
        setPlayerValue((previousPlayerValue) => {
            return previousPlayerValue + diceValue;
        })
    }, [diceValue])

    useEffect(() => {
        if(snakeMap[playerValue]){
            alert(`Oppsss! You're at ${playerValue} & a snake has bitten you go back to ${snakeMap[playerValue]}`);
            setPlayerValue(snakeMap[playerValue]);
        }
        if(ladderMap[playerValue]){
            alert(`Yayyy! You're at ${playerValue},you got a ladder go to ${ladderMap[playerValue]}`);
            setPlayerValue(ladderMap[playerValue]);
        }
        if (playerValue >= (n*n)){
            setPlayerValue(previousPlayerValue => {
                return n*n;
            });
        }
    }, [playerValue])

    
    return(
        <div className= "container">
            <div className="main-board">
                {matrixArray.map(rows => {
                    return(
                        <div className="row">
                            {rows.map(block => {
                                return(
                                        <div 
                                        className={`block ${ladderMap[block] ? "ladder" : ""} ${snakeMap[block] ? "snake" : ""} ${block === playerValue ? "active" : ""}`}
                                        >
                                        {block}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div class="dice-container">
                <img src={require(`../assets/dice${diceValue}.png`).default} alt="Dice" />
                <button onClick={() => roll()}>Roll Dice</button>
            </div>
        </div>
    )
}