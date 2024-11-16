let container = document.querySelector('.container');
  for(let i = 1;i <= 64;i++){
      let dot = document.createElement('div');
      dot.classList.add('element');
      container.appendChild(dot);
  }

  let dotall = document.querySelectorAll('.element');
  let animation = anime.timeline({
      targets:dotall,
      easing:'easeInOutExpo',
      loop:true,
      delay:anime.stagger(100,{grid:[10,10],form: 'center'})
  })
  animation
  .add({
      rotateZ : 180,
      //translateY:anime.stagger(-20,{grid:[10,10],from: 'center',axis:'y'}),
      //translateX:anime.stagger(-20,{grid:[10,10],from: 'center',axis:'x'}),
      
      opacity:1
  })
  .add({
      borderRadius:['0','50'],
  })
  .add({
      scale:0.2,
      opacity:1,
  })
  .add({
      scale:0.7,
      rotateY : 180,
  })
  .add({
      scale:1,
      opacity:0,
  })
  .add({
      scale:1,
      opacity:1,
  })
  .add({

      rotateX:180,
  })
