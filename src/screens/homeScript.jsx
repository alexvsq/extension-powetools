import React, { useEffect, useState } from 'react';
import IconCopy from '../../public/icon-copy'
import IconPicker from '../../public/picker-color.jsx'

export default function HomeScript() {
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState('');



    function hexToRgba(hex, alpha = 1) {
        hex = hex.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function rgbaToHex(rgba) {
        const regex = /rgba?\((\d+), (\d+), (\d+)(?:, (\d+(?:\.\d+)?))?\)/;
        const match = rgba.match(regex);

        if (match) {
            const [r, g, b] = match.slice(1, 4);
            return `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;
        }

        return '';
    }

    const handleHexChange = (e) => {
        const newHex = e.target.value;
        setHex(newHex);
        setRgb(hexToRgba(newHex));
    };

    const handleRgbChange = (e) => {
        const newRgb = e.target.value;
        setRgb(newRgb);
        setHex(rgbaToHex(newRgb));
    };

    const [colorList, setColorList] = useState([])

    function addColor(hex) {
        setColorList(prevColorList => ([...prevColorList, hex]).slice(-6));
    }


    useEffect(() => {
        const listStorage = JSON.parse(localStorage.getItem('listStorage'));
        if (listStorage) {
            setColorList(listStorage)

        }
    }, [])

    useEffect(() => {
        if (colorList.length > 0) {
            localStorage.setItem('listStorage', JSON.stringify(colorList));
        }
    }, [colorList])

    console.log(colorList);

    const dropper = new EyeDropper();

    const eyedropper = async () => {
        const color = await dropper.open();
        navigator.clipboard.writeText(color.sRGBHex)
        addColor(color.sRGBHex)
        setHex(color.sRGBHex);
        setRgb(hexToRgba(color.sRGBHex));
    };

    useEffect(() => {
        eyedropper();
    }, []);


    return (
        <>

            <header className='flex w-full items-center border border-[#222222] rounded-[10px] h-[50px] my-2'>
                <div className='flex w-1/2 justify-center text-[14px] font-semibold text-white'>Selected Color</div>
                <div className='w-1/2 rounded-e-[10px] h-full' style={{ backgroundColor: hex }}></div>
            </header>

            <section className='flex gap-5 my-2'>
                <article className='flex-1'>
                    <h2 className='py-1 text-white font-semibold'>Hex</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className=' flex border border-[#222222] rounded-[10px] w-full'>

                            <input
                                type="text"
                                className=' bg-transparent w-full py-1 px-2 focus:outline-none text-[13px] font-semibold'
                                value={hex}
                                onChange={handleHexChange}
                            />
                            <div className=' hover:bg-[#333333] rounded-[10px] transition m-[2px] active:bg-green-600'
                                onClick={() => navigator.clipboard.writeText(hex)}
                            >

                                <IconCopy />

                            </div>
                        </div>
                    </form>
                </article>
                <article className='flex-1'>
                    <h2 className='py-1 text-white font-semibold'>Rgba</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className=' flex border border-[#222222] rounded-[10px] w-full'>
                            <input
                                type="text"
                                className=' bg-transparent w-full py-1 px-2 focus:outline-none text-[13px] font-semibold'
                                value={rgb}
                                onChange={handleRgbChange}

                            />   <div className=' hover:bg-[#333333] rounded-[10px] transition m-[2px] active:bg-green-600'
                                onClick={() => navigator.clipboard.writeText(rgb)}
                            >

                                <IconCopy />
                            </div>
                        </div>
                    </form>
                </article>
            </section>
            <section className='my-3'>


                <h2 className='text-white font-semibold py-2 text-[15px]'>Recent Colors</h2>
                <article className='grid grid-cols-6 gap-1'>

                    {
                        colorList.map((color, i) => {
                            return (
                                <div
                                    key={i}
                                    className=' border border-[#222222] rounded-full cursor-pointer p-[2px] hover:bg-[#222222] transition'

                                    onClick={() => {
                                        setHex(color)
                                        setRgb(hexToRgba(color))
                                    }}
                                >
                                    <div className='aspect-square rounded-full' style={{ backgroundColor: color }}></div>
                                </div>
                            )
                        })
                    }

                </article>
            </section>
            <footer className=' mt-5 flex justify-end'>
                <button
                    className=' px-3 py-2 border border-[#222222] rounded-[10px] font-semibold hover:bg-[#ee1d36] text-white'
                    onClick={() => {
                        eyedropper()
                    }}
                >
                    Pick New Color
                </button>
            </footer>
        </>
    );
}
