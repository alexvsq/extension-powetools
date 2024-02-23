import React, { useContext , useEffect} from 'react';
import { DataContext } from './contexts/Contexts';

import Home from './screens/home';
import IcoBack from '../public/icon-back'
import ColorPicker from './screens/homeScript';
import Calculator from './screens/calculator';
import ScreenRecorder from './screens/screen-recorder';
import ClearCopy from './screens/clear-copy';
import Prueba from './screens/prueba';


function App() {

  const { page, setPage,colorData , setColorData } = useContext(DataContext);

 
  useEffect(() => {
    // Realizar la actualización de estado aquí
    if (page === 'PowerTools') {
      setColorData('#146EF5');	
    }else if (page === 'colorpicker') {
      setColorData('#EE1D36');
    } else if (page === 'Calculator') {
      setColorData('#ed52cb');
    } else if (page === 'ScreenRecorder') {
      setColorData('#ff6b00');
    } else if (page === 'ClearCopy') {
      setColorData('#00d722');
    }

  }, [page, setColorData]);

  const renderPage = () => {
    if (page === 'PowerTools') {
      return <Home />;
    } else if (page === 'colorpicker') {
      return <ColorPicker />;
    } else if (page === 'Calculator') {
      return <Calculator />;
    } else if (page === 'ScreenRecorder') {
      return <ScreenRecorder />;
    } else if (page === 'ClearCopy') {
      return <ClearCopy />;
    }else if (page === 'prueba') {
      return <Prueba />;
    }

  };

  return (
    <div className='flex flex-col min-h-screen max-h-[430px] overflow-y-auto'>
      <div className='flex-1'>
        <div className='max-w-[310px] m-auto'>

          {page !== 'PowerTools' &&
            <nav className='my-5 flex items-center gap-3 text-white text-[14px] cursor-pointer'
              onClick={() => setPage('PowerTools')}>
              <IcoBack /> Back
            </nav>
          }

          <div className=' '>
            {renderPage()}
          </div>
        </div>
      </div>
      <footer
      style={{ backgroundColor: colorData }}
      className={` text-white p-2`}>
        <h2 className='text-[16px] font-semibold'>{page}</h2>
      </footer>
    </div>
  );
}

export default App;