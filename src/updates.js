function statusToggler(box, list) {
  box.addEventListener('change', () => {
    const nextSibling = box.nextElementSibling.innerHTML;
    for (let i = 0; i < list.length; i += 1) {
      if (box.checked && nextSibling === list[i].description) {
        list[i].completed = true;
      } else if (box.unchecked && nextSibling === list[i].description) {
        list[i].completed = false;
      }
    }
  });
}

export default statusToggler;
