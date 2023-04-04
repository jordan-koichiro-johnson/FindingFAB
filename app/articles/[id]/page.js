

async function getArt(id) {
    console.log('fetch')
    let artId = id.id
    const res = await fetch(`http://127.0.0.1:8090/api/collections/articles/records/${artId}`, {
        headers: { 'cache-control': 'no-cache' },
        cache: 'no-store'
    });
    const data = await res.json();
    console.log(data)
    return data;
}

export default async function articlePage({ params }) {


    // let titleSpace = params.title.split('_').join(' ')

    const article = await getArt(params)
    console.log(article)
    return (
        <div>
            <h1>{article?.title}</h1>
            <img src={article?.image} width='214' height='300'></img>
            <div>

                {article?.text}
            </div>
        </div>
    );
}