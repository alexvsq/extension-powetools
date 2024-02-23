import React, { useContext, useEffect } from 'react'
import ArrowR from '../../public/arrow-right.jsx'
import { DataContext } from '../contexts/Contexts.jsx'
import IconPicker from '../../public/picker-color.jsx'
import IconCalculator from '../../public/icon-calculator.jsx'
import ScreenRecorder from '../../public/screen-recorder.jsx'
import CopyClear from '../../public/copy-clear.jsx'


const Home = () => {

    const { setPage } = useContext(DataContext);

    return (
        <>
            <section className=' '>
                <header className='flex justify-between my-4'>
                    <p>open/close with Alt+Q</p>
                    <p>Pick one</p>
                </header>

                <article
                    className={`my-3 py-1 px-3 border border-[#222222] rounded-[10px] flex items-center justify-between hover:bg-[#EE1D36] hover:scale-105 transition cursor-pointer`}
                    onClick={() => setPage('colorpicker')}
                >
                    <div className='flex items-center gap-3'>
                        <IconPicker />
                        <h2 className='text-white font-semibold text-[14px]'>Color Picker</h2>
                    </div>
                    <ArrowR />
                </article>


                <article
                    className={`my-3 py-1 px-3 border border-[#222222] rounded-[10px] flex items-center justify-between hover:bg-[#ed52cb] hover:scale-105 transition cursor-pointer`}
                    onClick={() => setPage('Calculator')}
                >
                    <div className='flex items-center gap-3'>
                        <IconCalculator />
                        <h2 className='text-white font-semibold text-[14px]'>Calculator</h2>
                    </div>
                    <ArrowR />
                </article>

                <article
                    className={`my-3 py-1 px-3 border border-[#222222] rounded-[10px] flex items-center justify-between hover:bg-[#ff6b00] hover:scale-105 transition cursor-pointer`}
                    onClick={() => setPage('ScreenRecorder')}
                >
                    <div className='flex items-center gap-3'>
                        <ScreenRecorder />
                        <h2 className='text-white font-semibold text-[14px]'>Screen Recorder</h2>
                    </div>
                    <ArrowR />
                </article>

                <article
                    className={`my-3 py-1 px-3 border border-[#222222] rounded-[10px] flex items-center justify-between hover:bg-[#00d722] hover:scale-105 transition cursor-pointer`}
                    onClick={() => setPage('ClearCopy')}
                >
                    <div className='flex items-center gap-3'>
                        <CopyClear />
                        <h2 className='text-white font-semibold text-[14px]'>Clear Copy</h2>
                    </div>
                    <ArrowR />
                </article>

              {/*   <article
                    className={`my-3 py-1 px-3 border border-[#222222] rounded-[10px] flex items-center justify-between hover:bg-[#00d722] hover:scale-105 transition cursor-pointer`}
                    onClick={() => setPage('prueba')}
                >
                    <div className='flex items-center gap-3'>
                        <CopyClear />
                        <h2 className='text-white font-semibold text-[14px]'>prueba</h2>
                    </div>
                    <ArrowR />
                </article> */}

            </section>

        </>
    );
};

export default Home;