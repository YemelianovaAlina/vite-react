import styles from './banner.module.css';
export const addBanner = (text) => {
  const contentElement = document.getElementById('content');
  contentElement.textContent = text;
  contentElement.classList.add(styles.bannerText);
};
