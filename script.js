const particles_container = document.querySelector(".particles-container")
const particles = document.querySelectorAll(".particle")

const WIDTH = window.innerWidth - 20
const HEIGHT = window.innerHeight -20

for(let i = 0;i<200;i++){
    const newParticle = document.createElement("div")

    newParticle.classList.add("particle")
    let pos_x = Math.floor(Math.random() * (WIDTH))
    let pos_y = Math.floor(Math.random() * (HEIGHT))
    newParticle.style.top = `${pos_y}px`
    newParticle.style.left = `${pos_x}px`

    newParticle.style.width = `${Math.floor(Math.random() * (5 - 1 + 1) + 1)}px`
    newParticle.style.height = `${Math.floor(Math.random() * (5 - 1 + 1) + 1)}px`


    // ANIMATE PARTICLES
    let moving

    const direction = Math.floor(Math.random() * (4 - 1 + 1) + 1)

    if(direction === 1){
        moving = [
            {top: `${pos_y}px`, left: `${pos_x}px`},
            {left: `${pos_x}px`, top: `${pos_y + 100}px`},
            {left: `${pos_x + 100}px`, top: `${pos_y + 100}px`},
            {left: `${pos_x + 100}px`, top: `${pos_y}px`},
            {left: `${pos_x}px`, top: `${pos_y}px`},
        ]
    } else if(direction === 2){
        moving = [
            {top: `${pos_y}px`, left: `${pos_x}px`},
            {left: `${pos_x}px`, top: `${pos_y - 100}px`},
            {left: `${pos_x + 100}px`, top: `${pos_y - 100}px`},
            {left: `${pos_x + 100}px`, top: `${pos_y + 100}px`},
            {left: `${pos_x}px`, top: `${pos_y}px`},
        ]
    } else if(direction === 3){
        moving = [
            {top: `${pos_y}px`, left: `${pos_x}px`},
            {left: `${pos_x - 100}px`, top: `${pos_y}px`},
            {left: `${pos_x - 100}px`, top: `${pos_y + 100}px`},
            {left: `${pos_x + 100}px`, top: `${pos_y + 100}px`},
            {left: `${pos_x}px`, top: `${pos_y}px`},
        ]
    } else if(direction === 4){
        moving = [
            {top: `${pos_y}px`, left: `${pos_x}px`},
            {left: `${pos_x + 100}px`, top: `${pos_y}px`},
            {left: `${pos_x + 100}px`, top: `${pos_y + 100}px`},
            {left: `${pos_x - 100}px`, top: `${pos_y}px`},
            {left: `${pos_x}px`, top: `${pos_y}px`},
        ]
    }
    const timing = {
        duration: Math.floor(Math.random() * (20000 - 15000 + 1) + 15000),
        iterations: Infinity
    }

    newParticle.animate(moving, timing)


    // ADD PARTICLE
    particles_container.append(newParticle)

}


document.querySelector('.contact-btn').addEventListener('click', ()=>window.scroll({left: 0, top: document.body.scrollHeight, behavior: "smooth"}))

