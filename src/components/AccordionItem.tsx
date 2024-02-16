import {
  useEffect,
  useRef,
  useState
} from 'react';
import { getRefValue } from '../lib/hooks';
import { AccordionData } from '../types';
import './AccordionItem.css';

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
  idx,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
  idx:number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button id={`accordion-button-${idx}`} aria-expanded={isOpen} onClick={btnOnClick}>
        <span className="accordion-title">{data.title}</span>
      </button>
      <div className="accordion-item-container">
        <div ref={contentRef} className="accordion-item-content" style={{height}}>
          {data.content}
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;
