export { statusToggler};


//Functions
let statusToggler = (box, list) => {
    box.addEventListener('change', function(e){
        let nextSibling = box.nextElementSibling.innerHTML;
        for (let i = 0; i < list.length; i++) {
            if (box.checked && nextSibling === list[i].description){
                list[i].completed = true;
            }else if (box.unchecked&& nextSibling === list[i].description){
                list[i].completed = false;
            }
        }
      });
}
