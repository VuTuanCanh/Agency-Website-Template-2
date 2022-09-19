var item = document.querySelectorAll('.FAQ-list .item');


item.forEach(element => {
    element.addEventListener('click', () => {
        var childrenShow = element.children[1];
        if (childrenShow.style.display == 'block') {
            childrenShow.style.display = 'none';
            element.classList.remove('show');
        }
        else {
            childrenShow.style.display = 'block';
            element.classList.add('show');
        }

    })
});
