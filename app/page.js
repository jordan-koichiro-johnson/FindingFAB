
import { redirect } from 'next/navigation';
export default async function HomePage() {
    redirect('/home');

}


async function getArt() {

    const res = await fetch('http://127.0.0.1:8090/api/collections/articles/records?page=1&perPage=30');
    const data = await res.json();
    // console.log(data)
    return data?.items;
}

// getArt()