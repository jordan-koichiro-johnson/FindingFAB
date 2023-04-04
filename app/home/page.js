
import Link from 'next/link'

async function getArt() {

    const res = await fetch('http://127.0.0.1:8090/api/collections/articles/records?page=1&perPage=30', {
        headers: { 'cache-control': 'no-cache' },
        cache: 'no-store'
    });
    const data = await res.json();

    return data?.items;
}

export default async function HomePage() {

    const articles = await getArt()

    return (
        <div>
            <h1>home page</h1>
            <div>

                {articles?.map((article) => {
                    return <Article key={article.id} article={article} />
                })}
            </div>
        </div>
    );
}



function Article({ article }) {

    let { id, title, image, summary } = article

    // let titleNoSpace = title.split(' ').join('_')

    return (
        <div>
            <h1 >
                <Link href={'articles/' + id}>
                    {title}
                </Link>

            </h1>
            <div>
                <img src={image} width="500" height="600"></img>

            </div>
            <p>
                {summary}
            </p>
        </div>
    )
}