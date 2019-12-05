(() => {
   
    let buttons = document.querySelectorAll('.circle'),
    popover = document.querySelector('.popover');


    function showPopover(smokedata, el) {
        popover.querySelector(".percentage").textContent = `${smokedata.percentage}`;
        // show the popover
        popover.classList.add('show-popover');
        el.appendChild(popover);

        let cig = document.querySelector('.cigarette');

        cig.data = `images/${smokedata.image}`
    }

    
    function fetchData(event) {
        event.preventDefault();
        let targetEl = this,
        url = `/svgdata/${this.id}`;
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
           console.log(data);
    
           
            // populate the popover
            showPopover(data, targetEl);

        })
        .catch((err) => console.log(err));
    }
    
    buttons.forEach(button => button.addEventListener("click", fetchData));
})();