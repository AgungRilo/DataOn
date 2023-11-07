import Car from "../assets/car1.jpg"
import Ava1 from "../assets/ava1.jpg"
const cardContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '160px',
    borderRadius: '4px',
    overflow: 'hidden',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
};

const imageStyle = {
    width: '10px',
    height: '10px',
    objectFit: 'cover',

};

const cardStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
};

const cardLeft = {
    width: "140px",
    height: "140px",
    position: "relative",
    borderRadius: "10%",
    marginRight: "-20px",
    marginTop: "16px",
    zIndex: "-1"
}
const cardRight = {
    width: "190px",
    height: "160px",
    position: "relative",
    marginTop: "8px",
    borderRadius: "10%",
    backgroundColor: "white",
    marginRight: "-10px",
    zIndex: "-2"
}
function CardContent2() {
    return (
        <div style={cardContainerStyle}>
            <div style={cardRight}>
                <div style={{ display: "flex", padding: "8px" }}>
                    <img src={Ava1} alt="Gambar 1" className="gambar" width={60} height={60} style={{ borderRadius: "50%" }} />
                    <div style={{ display: "flex", flexDirection: "column", marginRight: "26px" }}>
                        <div style={{ textAlign: "left" }}>
                            Andrea
                        </div>
                        <div style={{ textAlign: "left" }}>
                            16 Nov
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                    Lorem ipsum dolor
                </div>
            </div>
            <img style={cardLeft} src={Car} alt="Gambar 1" className="gambar" width={60} height={60} />
        </div>
    );
}

export default CardContent2;
