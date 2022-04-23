barba.init({
    preventRunning: true,
    transitions: [
        {
            name: "default",
            leave(data) {
                const done = this.async()
                let current = data.current.container
                gsap.fromTo(current, {opacity: 1}, {opacity: 0, duration: 1, onComplete: done })
            },
            enter(data){ 
                const done = this.async()
                let next = data.next.container
                gsap.fromTo(next, {opacity: 0}, {opacity: 1, duration: 1, onComplete: done})
            }
        }
    ]
})
