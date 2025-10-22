//template_gk5l2is
//service_o2400mg
//3ZOkmaBYsFEfO7boJ

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible" 
    emailjs 
        .sendForm(
            'sservice_o2400mg',
            'template_gk5l2is',
            event.target,
            '3ZOkmaBYsFEfO7boJ'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at katiomay@gmail.com"
            );
    } )
}