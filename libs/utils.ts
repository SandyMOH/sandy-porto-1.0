export const addOverflowHidden = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.style.overflow = 'hidden';
  }
};

export const removeComponent = (className: string): void => {
  if (process.env.NODE_ENV === 'production') {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.remove();
      }
    });
  }
};

export const goToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
