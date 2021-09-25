function statusToggler(box, list) {
  box.addEventListener('change', () => {
    const nextSibling = box.nextElementSibling.value;
    for (let i = 0; i < list.length; i += 1) {
      if (box.checked && nextSibling === list[i].description) {
        list[i].completed = true;
        localStorage.setItem('pushing', JSON.stringify(list));
      } else if (!box.checked && nextSibling === list[i].description) {
        list[i].completed = false;
        localStorage.setItem('pushing', JSON.stringify(list));
      }
    }
  });
}

export default statusToggler;
