// About me, education, skills, projects active 

const tabs = document.querySelectorAll('[data-target]'),
      tabsContents = document.querySelectorAll('[data-content]');
      
tabs.forEach(tab=> {
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabsContents.forEach(tc =>{
      tc.classList.remove('filters_active')
    })
    target.classList.add('filters_active')

    tabs.forEach(t => {
      t.classList.remove('filter-tab-active')
    })
    tab.classList.add('filter-tab-active')
  })
})

// skills loading


// for html
let number_html = document.getElementById('html_number');
let counter_html = 0;
setInterval(() => {
  if(counter_html == 90){
    clearInterval();
  }else{
  counter_html +=1;
  number_html.innerHTML = counter_html + '%';
}
}, 32)

// for css
let number_css = document.getElementById('css_number');
let counter_css = 0;
setInterval(() => {
  if(counter_css == 85){
    clearInterval();
  }else{
    counter_css +=1;
    number_css.innerHTML = counter_css + '%';
}
}, 32)

// for js
let number_js = document.getElementById('js_number');
let counter_js = 0;
setInterval(() => {
  if(counter_js == 60){
    clearInterval();
  }else{
    counter_js +=1;
    number_js.innerHTML = counter_js + '%';
}
}, 32)

// for bootstrap
let number_bootstrap = document.getElementById('bootstrap_number');
let counter_bootstrap = 0;
setInterval(() => {
  if(counter_bootstrap == 85){
    clearInterval();
  }else{
    counter_bootstrap +=1;
    number_bootstrap.innerHTML = counter_bootstrap + '%';
}
}, 32)

// for wordPress
let number_wordPress = document.getElementById('wordPress_number');
let counter_wordPress = 0;
setInterval(() => {
  if(counter_wordPress == 80){
    clearInterval();
  }else{
    counter_wordPress +=1;
    number_wordPress.innerHTML = counter_wordPress + '%';
}
}, 32)

// for scss
let number_scss = document.getElementById('scss_number');
let counter_scss = 0;
setInterval(() => {
  if(counter_scss == 70){
    clearInterval();
  }else{
    counter_scss +=1;
    number_scss.innerHTML = counter_scss + '%';
}
}, 32)

// for jQyery
let number_jQuery = document.getElementById('jQuery_number');
let counter_jQuery = 0;
setInterval(() => {
  if(counter_jQuery == 60){
    clearInterval();
  }else{
    counter_jQuery +=1;
    number_jQuery.innerHTML = counter_jQuery + '%';
}
}, 32)

// for php
let number_php = document.getElementById('php_number');
let counter_php = 0;
setInterval(() => {
  if(counter_php == 10){
    clearInterval();
  }else{
    counter_php +=1;
    number_php.innerHTML = counter_php + '%';
}
}, 32)




// Project POPUP 

document.addEventListener('click', (e)=> {
  if(e.target.classList.contains('project_button')) {
    toggleProjectPopup();
    projectItemDetails(e.target.parentElement);
  }
})

function toggleProjectPopup(){
  document.querySelector('.project_popup').classList.toggle('open');
}

document.querySelector('.project_popup-close').addEventListener('click', toggleProjectPopup);

function projectItemDetails(projectItem){
  document.querySelector('.project_thumbnail img').src = projectItem.querySelector('.project_img').src;
  document.querySelector('.project_popup-subtitle span').innerHTML = projectItem.querySelector('.project_title').innerHTML;
  document.querySelector('.project_popup-body').innerHTML = projectItem.querySelector('.project_item-details').innerHTML;
}
