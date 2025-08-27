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

export const generateId = (): string => {
  return Math.random().toString(36).substring(7);
};

export const generateKebabCase = (str: string): string => {
  if (!str) return '';

  return (
    str
      // 1. Insert a hyphen before any uppercase letter that is preceded by a lowercase letter.
      // e.g., "myVariable" -> "my-Variable"
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')

      // 2. Replace any spaces or underscores with a hyphen.
      // e.g., "my-Variable name" -> "my--Variable-name"
      .replace(/[\s_]+/g, '-')

      // 3. Convert the entire string to lowercase.
      // e.g., "my--Variable-name" -> "my--variable-name"
      .toLowerCase()

      // 4. (Optional but recommended) Remove consecutive hyphens
      .replace(/--+/g, '-')
  );
};
