import React, { useState } from 'react';

export default function extensionHello() {

    const startCapture = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    mediaSource: 'screen'
                }
            });

            const data = [];
            const mediaRecorder = new MediaRecorder(stream);


            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    data.push(e.data);
                }
            };


            mediaRecorder.onstop = () => {
                const blob = new Blob(data, { type: 'video/webm' });
                const videoUrl = URL.createObjectURL(blob);

                const downloadLink = document.createElement('a');
                downloadLink.href = videoUrl;
                downloadLink.download = 'captured-video.webm';
                document.body.appendChild(downloadLink);
                downloadLink.click();

                document.body.removeChild(downloadLink);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();


        } catch (error) {
            console.error('Error:', error); 
            alert('Ha ocurrido un error al iniciar la captura de pantalla.');
        }
    };


    const getCurrentTab = async () => {
        try {
            const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

            await chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: startCapture
            });
        } catch (error) {
            console.error('Error al obtener la pestaña actual:', error);
            alert('Ha ocurrido un error en esta pestaña.');
        }
    };
    return (
        <>
            <div className=' flex justify-center my-6'>

                <button
                    onClick={getCurrentTab}
                    className='px-3 text-white py-2 border border-[#222222] text-[15px] rounded-[10px] font-semibold hover:bg-[#ff6b00]'
                >
                    Start
                </button>
            </div>

            <p>Video will download in format .webm</p>

        </>
    );

}
