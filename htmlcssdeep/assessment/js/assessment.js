document.onreadystatechange = function() {
    document.querySelectorAll('.container-prodimg').forEach(element => {
            element.addEventListener('mouseover', function() {
                let img = element.firstElementChild;
                let btn = img.nextElementSibling;
                btn.style.display = 'block';
            })

            element.addEventListener('mouseout', function() {
                let img = element.firstElementChild;
                let btn = img.nextElementSibling;
                btn.style.display = 'none';
            })
        }
    );
}