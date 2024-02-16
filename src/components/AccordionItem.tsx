import { AccordionData } from '../types';
import './AccordionItem.css';

function AccordionItem(
  {
    data,
    isOpen,
    btnOnClick,
    idx,
  }: {
    data: AccordionData;
    isOpen: boolean;
    btnOnClick: () => void;
    idx: number;
  }) {

  return (
    <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button id={`accordion-button-${idx}`} onClick={btnOnClick}>
        <span className="accordion-title">{data.title}</span>
      </button>
      <div className="accordion-item-container">
        <div className="accordion-item-content">
          {data.content}
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;
