import backIcon from "../assets/backArrow.png"
import Card from "../component/card";
import CardContent from "../component/cardContent";
import { useNavigate } from 'react-router-dom';
import CardContent2 from "../component/cardContent2";
function Home() {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/login');

    };
    return (
        <div className="Home">
            <div style={{ margin: "20px 0 0 20px" }}>
                <img src={backIcon} alt="Gambar Saya" width={40} height={40} onClick={handleLogout} />
            </div>
            <h1 style={{ color: "white", margin: "0 0 24px 24px" }}>City News</h1>
            <div >
                <Card />
            </div>
            <div style={{ marginTop: "40px" }}>
                <CardContent />
            </div>
            <div style={{ marginTop: "40px" }}>
                <CardContent2 />
            </div>
            <div style={{ marginTop: "40px" }}>
                <CardContent />
            </div>
            <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <CardContent2 />
            </div>
        </div>
    );
}

export default Home;
