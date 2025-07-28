export const addOverflowHidden = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.style.overflow = 'hidden';
  }
};

export const removeComponent = (className: string): void => {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      element.remove();
    }
  });
};
