import cleanCar from '../../assets/clean-car.png'
import durtyCar from '../../assets/durty-car.png'

const DiffSection = () => {
  return (
    <div className='mt-10'>
      <div className="diff aspect-[16/6] h-full">
        <div className="diff-item-1">
          {/* <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
            DAISY
          </div> */}
          <img src={cleanCar} alt="" className='h-auto' />
        </div>
        <div className="diff-item-2">
          {/* <div className="bg-base-200 grid place-content-center text-9xl font-black">
            DAISY
          </div> */}
          <img src={durtyCar} alt="" className='h-auto'/>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default DiffSection;
