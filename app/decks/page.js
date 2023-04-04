

async function getDecks() {

    const res = await fetch('http://127.0.0.1:8090/api/collections/decklists/records?page=1&perPage=30', {
        headers: { 'cache-control': 'no-cache' },
        cache: 'no-store'
    });
    const data = await res.json();

    return data?.items;
}

export default async function DecksPage() {
    const decks = await getDecks()


    return (
        <div>
            <div>
                <h1>
                    decks
                </h1>
                {decks?.map((deck, i) => {
                    return <Deck key={deck.id} deck={decks[i].deck} />
                })}
            </div>
        </div>
    );
}


function Deck({ deck }) {

    let { Author, Hero, Format, Equips, Reds, Yellows, Blues, Greys } = deck

    return (
        <div>
            <h3>
                {Author}
            </h3>
            <h4>
                {Hero}
            </h4>
            <h5>
                {Format}
            </h5>
            <p>
                {Equips}
            </p>
            <p>
                {Reds}
            </p>
            <p>
                {Yellows}
            </p>
            <p>
                {Blues}
            </p>
            <p>
                {Greys}
            </p>
        </div>
    )
}