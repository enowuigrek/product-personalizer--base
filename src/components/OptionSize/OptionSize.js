import styles from './OptionSize.module.scss';

import clsx from "clsx";
import shortid from "shortid";

const OptionSize = props => {
  
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}> Sizes </h3>
      <ul className={styles.choices}>

        {props.sizes.map((size) => (
          <li key={size.name}>
            <button
              className={clsx(
                props.currentSize === size.name && styles.active
              )}
              onClick={() => props.setCurrentSize(size.name)}
              key={shortid()}>
              {size.name}
            </button>
          </li>
        ))}
        
      </ul>
    </div>
  )
}

export default OptionSize;