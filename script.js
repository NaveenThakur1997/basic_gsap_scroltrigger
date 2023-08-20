var tl = gsap.timeline()

tl.from("#nav h2, #nav h4",{
  y:-30,
  opacity:0,
  duration:0.6,
  stagger:0.2 
})
tl.from("#main h1",{
  y:40,
  opacity:0,
  duration:0.6,
  stagger:0.3
})
tl.from("#main button",{
  y:40,
  opacity:0,
  duration:0.4,
  scale:0,
})
tl.from("#main img",{
  scale:0.4,
  y:40,
  duration:0.5,
  opacity:0
})
gsap.from(".elem",{
  scale:0,
  opacity:0,
  duration:0.3,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#elem1",
    scroller:"body",
    start:"top 60%"
  }
})