var bio = document.querySelector('header a span:nth-of-type(1)'),
    biono = document.querySelector('header a span:nth-of-type(2)'),
    h1 = document.querySelector('header h1'),
    hero = document.querySelector('header div:nth-of-type(1)'),
    p = document.querySelector('header p');

    bio.addEventListener('click', function(){
        p.classList.add("appear");
        h1.classList.add("width");
    })
    biono.addEventListener('click', function(){
      p.classList.remove("appear");
      h1.classList.remove("width");
    })
