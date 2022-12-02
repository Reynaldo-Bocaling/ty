



    // let logo = document.querySelector('.logo')
    // let search = document.querySelector('.search')
    // let menu = document.querySelector('.menu')
    // let navbar = document.querySelector('.navbar')
  
    //   navbar?.classList.remove('active')
    //   menu?.classList.remove('active')
    //   search?.classList.remove('active')
    //   logo?.classList.remove('active')
  




    
    let logo = document.querySelector('.logo')
    let search = document.querySelector('.search')
    let menu = document.querySelector('.menu')
    let navbar = document.querySelector('.navbar')
  
     menu.addEventListener('click', function(){
        navbar?.classList.toggle('active')
        menu?.classList.toggle('active')
        search?.classList.toggle('active')
        logo?.classList.toggle('active')
     })

      window.addEventListener('scroll', function(){
        navbar?.classList.remove('active')
        menu?.classList.remove('active')
        search?.classList.remove('active')
        logo?.classList.remove('active')
      });


  






    let input = document.querySelector('.input_search')
    let slash = document.querySelector('.slash')
    let home = document.querySelector('#home')
  

    search.addEventListener('scroll', function(){

        input?.classList.toggle('active')
        slash?.classList.toggle('active')
        home?.classList.toggle('active')
    })
  
   
  

