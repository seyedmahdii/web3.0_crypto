import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Welcome from "./components/Welcome/Welcome";
import Services from "./components/Servcies/Services";
import Transactions from "./components/Transactions/Transactions";

const App = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Welcome />
            </div>
            <Services />
            <Transactions />
            <Footer />
        </div>
    );
};

export default App;
