import React from "react";
import headerCar from '../images/headerCar.png';
import '../style.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="row" style={{ backgroundColor: "#cfd4ed", alignItems: "end" }}>
            <div className="col-lg-6 d-flex mb-5 flex-column">
                <div>
                    <p className="headText">
                        Sewa & Rental Mobil Terbaik di Kawasan Garut</p>
                </div>
                <div>
                    <p className="text1">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <Link to="/CariMobil" className="butSewa btn btn-success">
                    <p className="textSewa">Mulai Sewa Mobil</p>
                </Link>
            </div>
            <div className="col-lg-6">
                <img className="fotoMobil" src={headerCar} alt="Gambar Mobil"></img>
            </div>
        </div>
    )
}

export default Header;