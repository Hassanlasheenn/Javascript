        const toggle = document.getElementById('toggleDark');
        const body = document.querySelector('body');
        const text = document.getElementById('text');

        toggle.addEventListener('click', function() {
            this.classList.toggle('bi-lightbulb-off-fill')
            if(this.classList.toggle('bi-lightbulb-fill')){
                text.textContent = 'b r i g h t';
                // text.style.transition = '.5s';
                body.style.background = 'white';
                body.style.color = 'black';
                body.style.transition = '1s';
            }else{
                text.textContent = 'd a r k';
                // text.style.transition = '.5s';
                body.style.background = 'black';
                body.style.color = 'white';
                body.style.transition = '1s';
            }
        })
