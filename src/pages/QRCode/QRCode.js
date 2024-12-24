import React from 'react';
import {QRCodeSVG} from 'qrcode.react';

const QRCodePage = () => {
    return (

        <div> <QRCodeSVG value="https://reactjs.org/" /></div>
    )
}

export default QRCodePage;