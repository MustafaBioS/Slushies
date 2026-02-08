const flag = document.querySelector('.flag');
const q = document.querySelectorAll('.q');


flag.addEventListener('click', ()=> {
    window.location.href = "https://hackclub.com/";
})

q.forEach(qs => {
    qs.addEventListener('click', (toggleFAQ))
})

function toggleFAQ(e) {
    const current = e.currentTarget;

    document.querySelectorAll('.q').forEach(q => {
        if (q !== current) q.classList.remove('open');
    });

    current.classList.toggle('open');
}