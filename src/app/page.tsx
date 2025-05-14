import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    );
}
