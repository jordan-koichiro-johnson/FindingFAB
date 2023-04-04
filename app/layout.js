/* eslint-disable @next/next/no-head-element */
import Link from 'next/link'
import "../styles/style.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <nav>
          <h4>FabGoldfish</h4>
          <Link href='/home'>
            Home
          </Link>
          <Link href='/cards'>
            Cards
          </Link>
          <Link href='/decks'>
            Decks
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
