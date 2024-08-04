const newElement = (tagName, className = null, id = null) => {
  const element = document.createElement(tagName);

  if (className) element.setAttribute('class', className);
  if (id) element.id = id;

  return element;
};

export default newElement;
