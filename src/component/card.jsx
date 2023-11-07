import Car from "../assets/car1.jpg"
import Ava1 from "../assets/ava1.jpg"

function Card() {
    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", width: "100%" }}>
            {/* <div className="gambar" style={{ width: "20px", height: "20px", border: "1px solid white", position: "relative", textAlign: "center", margin: "-16px auto 0 auto", borderRadius: "4px" }}> */}
            <img src={Car} alt="Gambar 1" className="gambar" width={320} height={160} style={{ position: "relative", textAlign: "center", margin: "-16px auto 0 auto", borderRadius: "4px", }} />
            {/* </div> */}
            <div className="gambar" style={{ width: "300px", height: "120px", position: "relative", margin: "-80px auto 0 auto", backgroundColor: "white", borderRadius: "4px", }}>
                <div style={{ display: "flex", padding: "12px" }}>
                    <img src={Ava1} alt="Gambar 1" className="gambar" width={60} height={60} style={{ borderRadius: "50%" }} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ textAlign: "left" }}>
                            Andrea
                        </div>
                        <div style={{ textAlign: "left" }}>
                            16 Nov
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                    Lorem ipsum dolor sit amet
                </div>
            </div>


        </div >
    );
}

export default Card;
