import styles from "./Filter.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import type { FilterProps } from "@/@types/filterProps";

const Filter: React.FC<FilterProps> = ({ title, filtersArr }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState<null | any>(filtersArr[0]);
  const filterRef = React.useRef<HTMLDivElement>(null);

  const handleClick = (i: number) => {
    setValue(filtersArr[i]);
    setIsOpen(false);
  };

  // Click Component outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !event.composedPath().includes(filterRef.current)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.filter} ref={filterRef}>
      <h4 className={styles.title}>{title}</h4>
      <span onClick={() => setIsOpen(!isOpen)}>
        {value}
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7922 1.73487L6.13786 6.75224C6.08245 6.8118 6.02243 6.85388 5.95778 6.8785C5.89314 6.90351 5.82388 6.91602 5.75 6.91602C5.67612 6.91602 5.60686 6.90351 5.54222 6.8785C5.47757 6.85388 5.41755 6.8118 5.36214 6.75224L0.693931 1.73487C0.564644 1.59592 0.5 1.42222 0.5 1.21378C0.5 1.00535 0.569261 0.826686 0.707783 0.677803C0.846306 0.528919 1.00792 0.454478 1.19261 0.454478C1.37731 0.454478 1.53892 0.528919 1.67744 0.677803L5.75 5.05497L9.82256 0.677802C9.95185 0.538845 10.1111 0.469365 10.3002 0.469365C10.4897 0.469365 10.6537 0.543807 10.7922 0.69269C10.9307 0.841574 11 1.01527 11 1.21378C11 1.41229 10.9307 1.58599 10.7922 1.73487Z"
            fill="#333333"
          />
        </svg>
      </span>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {filtersArr.map((item, i: number) => (
              <li
                key={i}
                onClick={() => handleClick(i)}
                className={value === i ? `${styles.active}` : ""}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
