import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-lightBg">
      <Component {...pageProps} />
    </main>
  );
}
