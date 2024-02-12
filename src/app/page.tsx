import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Links } from "./components/links";

export default async function Home() {
  return (
    <main>
      <Header/>
      <Links />
      <Footer/>
    </main>
  );
}
