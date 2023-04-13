// Buttons

const inactiveButtons = document.querySelectorAll(".inactive-btn");

inactiveButtons.forEach(el => {
    let isActive = false;
    
    el.addEventListener("click", () => {
        el.classList.toggle('btn_active');
        
        if(isActive){
            el.textContent = "Inactive";
            isActive = false;
        }else {
            el.textContent = "Active";
            isActive = true;
        }

    })
});

// Nav buttons

const navButtons = document.querySelector('.buttons-customer'), 
      navButton = document.querySelectorAll('.buttons-customer__element_main');

navButtons.addEventListener("click", (e) => {

    if (e.target.classList.contains("buttons-customer__element_main")) {
        navButton.forEach(el => {
            el.classList.remove('buttons-customer__element_active');
        })

        e.target.classList.add('buttons-customer__element_active');
    }
    }
)

// Burger menu

function burgerMenu(){

    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.sidebar__menu'),
          body = document.body;

    burger.addEventListener('click', ()=> {
        burger.classList.toggle('open');
        menu.classList.toggle('open');
        body.classList.toggle('unscrolling');
    })
}

burgerMenu();