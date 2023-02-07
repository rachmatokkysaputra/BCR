import React from "react";
import '../style.css';
import servis from '../images/avatarService.png';

function OurServices() {
    return (
        <div className="row" id="ourService">
            <div className="col-md-6 ">
                <img className="avaService" src={servis} alt="Gambar Orang"></img>
            </div>
            <div className="col-md-6">
                <p className="serviceText ">
                    Best Car Rental for any kind of trip in Garut!</p>
                <p className="text2 ">
                    Sewa mobil di Garut bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                    lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                    wedding, meeting, dll.
                </p>
                <ul className="listSewa ">
                    <li className="correctList">Sewa Mobil Dengan Supir di Garut 12 Jam</li>
                    <li className="correctList">Sewa Mobil Lepas Kunci di Garut 24 Jam</li>
                    <li className="correctList">Sewa Mobil Jangka Panjang Bulanan</li>
                    <li className="correctList">Gratis Antar - Jemput Mobil di Bandara</li>
                    <li className="correctList">Layanan Airport Transfer / Drop In Out</li>
                </ul>
            </div>
        </div>
    )
}

export default OurServices;