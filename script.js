
var tl = gsap.timeline()
tl.from(".line h1",{
    y:100,
    stagger:0.25, 
    duration:0.6,
    delay:0.5
})
tl.from("#line1-part1, .line h2",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function(){
            if(grow<100){
                h5timer.innerHTML = grow++
            }else{
                h5timer.innerHTML = grow
            }
        }, 35);
    },
})
tl.to("#loader", {
    opacity:0,
    duration:0.4,
    delay:3.8
})
t1.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:power4
})
t1.to("#loader",{
    display: "none"
})