import React from 'react';

export default function DownloadButton({ ButtonText, Icon, downloadUrl, downloadFilename }) {
    const handleButtonClick = () => {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = downloadFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="button" onClick={handleButtonClick}>
            {Icon}
            {ButtonText}
        </div>
    );
}
