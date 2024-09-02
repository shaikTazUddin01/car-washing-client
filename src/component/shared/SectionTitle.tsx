import line from '../../assets/line.png'

import './sectionTitle.css'

const SectionTitle = ({title}:{title:string}) => {
    return (
        <div className=''>
            <h1 className="text-center text-2xl md:text-4xl font-semibold font-unbounded">{title}</h1>
            <img src={line} alt="" className='headerLine mx-auto -mt-4 lg:-mt-8' />
        </div>
    );
};

export default SectionTitle;