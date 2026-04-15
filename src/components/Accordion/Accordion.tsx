import { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
    
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button 
            className={`${styles.title} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
          </button>
          <div className={`${styles.content} ${activeIndex === index ? styles.show : ''}`}>
            <div className={styles.innerContent}>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;