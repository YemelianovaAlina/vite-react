import styles from './banner.module.css';
export const addBanner = (text: string) => {
  const contentElement = document.getElementById('content') as HTMLDivElement;
  contentElement.textContent = text;
  contentElement.classList.add(styles.bannerText);
};
