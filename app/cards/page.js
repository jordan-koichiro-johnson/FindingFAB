import "../../styles/cards.css";


let cardArrCC = [
    {
        id: 1,
        name: "cnc",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
    {
        id: 2,
        name: "come to fight",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
    {
        id: 3,
        name: "art of war",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
    {
        id: 4,
        name: "head jab",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
]


let cardArrBlitz = [
    {
        id: 1,
        name: "cnc but blitz",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
    {
        id: 2,
        name: "come to fight",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
    {
        id: 3,
        name: "art of war",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
    {
        id: 4,
        name: "head jab",
        cost: 2,
        pitch: 1,
        percent: 100,
        number: 3
    },
]

import { } from 'react'
export default async function CardsPage() {
    return (
        <div>
            <div>

                <h1>
                    Most Played Cards in CC
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th ></th>
                            <th >Card</th>
                            <th >Cost</th>
                            <th >Pitch</th>
                            <th >% of Decks</th>
                            <th ># Played</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cardArrCC.map((card) => {
                            return <Card key={card.id} card={card} />
                        })}
                    </tbody>
                </table>
            </div>
            <div>

                <h1 className={'title'}>
                    Most Played Cards in Blitz
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th ></th>
                            <th >Card</th>
                            <th >Cost</th>
                            <th >Pitch</th>
                            <th >% of Decks</th>
                            <th ># Played</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cardArrBlitz.map((card) => {
                            return <Card key={card.id} card={card} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}


function Card({ card }) {

    let { id, name, cost, pitch, percent, number } = card

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{cost}</td>
            <td>{pitch}</td>
            <td>{percent}</td>
            <td>{number}</td>
        </tr>
    )
}