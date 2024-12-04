import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeDisplay = ({ userData }) => {
    const qrCodeData = JSON.stringify(userData, null, 2);

    const downloadQRCode = () => {
        const canvas = document.querySelector("canvas");
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "QRCode.png";
        link.click();
    };

    return (
        <div className="QRCodeDisplay">
            <h2>Your QR Code</h2>
            <QRCodeCanvas value={qrCodeData} size={300} />
            <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
    );
};

export default QRCodeDisplay;
