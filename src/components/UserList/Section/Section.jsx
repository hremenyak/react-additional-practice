import styles from '../Section/Section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section className={title ? styles.superSection : styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
