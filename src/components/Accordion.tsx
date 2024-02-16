import { useState } from 'react';
import { AccordionData } from '../types';
import AccordionItem from './AccordionItem';
import './Accordion.css';

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  console.log('currentIdx', currentIdx)
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : items.length - 1));
  };

  return (
    <div className="accordion-wrapper">
      <ul className="accordion">
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            data={item}
            idx={idx}
            isOpen={idx === currentIdx}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))}
      </ul>
    </div>

  );
}

export default Accordion;
