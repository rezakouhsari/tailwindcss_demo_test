
// nav_manu
let timer;
let timers;

let list_categories = document.getElementById('list_categories');
let mega_menu = document.getElementById('mega_menu');
let menu_bg_dark = document.getElementById('menu_bg_dark');


let side_menu = document.querySelectorAll('#side_menu li');
let main_menu = document.querySelectorAll('#main_menu > div');


list_categories.addEventListener('mouseover', openMenu)
list_categories.addEventListener('mouseleave', closeMenu)
menu_bg_dark.addEventListener('mousemove', closeMenu)


side_menu.forEach((item) => {
    item.addEventListener('mouseover', () => {
        clearTimeout(timers);
        timers = setTimeout(() => {
            side_menu.forEach((item2) => {
                item2.classList.add('bg-slate-200');
                item.classList.remove('bg-slate-200');

                item2.classList.remove('text-main_digikala');
                item.classList.add('text-main_digikala');
            })
            main_menu.forEach((item_menu) => {

                if (item.getAttribute('data-time') === item_menu.getAttribute('data-time')) {
                    item_menu.classList.add('flex-col')
                    item_menu.classList.remove('hidden')
                } else {
                    item_menu.classList.add('hidden')
                }
            })
        }, 500)
    });
    item.addEventListener('mouseleave', () => {
        clearTimeout(timers);
    })
})



function openMenu() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        mega_menu.classList.remove('hidden');
        mega_menu.classList.add('flex')
        document.body.style.overflow = 'hidden'
    }, 500)

}

function closeMenu() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        mega_menu.classList.remove('flex');
        mega_menu.classList.add('hidden')
        document.body.style.overflow = 'auto'
    }, 500)

}
// nav_manu

// navbar-b
var marker=document.querySelector('#marker');
var item=document.querySelectorAll('#nav_items li');

function indicator(e){
    marker.style.left=e.offsetLeft + "px"; 
    marker.style.width=e.offsetWidth + "px"; 
}
item.forEach((link)=>{
    link.addEventListener("mousemove",(e)=>{
        indicator(e.target);
    })
    link.addEventListener("mouseleave",(e)=>{
        marker.style.width="0px"
    })
})


// navbar-b


// tabs_cart

let tabs=document.querySelectorAll('#tabs li');
let tabsContent=document.querySelectorAll('.content > div');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((content)=>{
            content.classList.remove('after:bg-[#ef4056]','text-[#ef4056]')
        })
        tabsContent.forEach((content)=>{
            content.classList.add('hidden','flex')
        })
        tabs[index].classList.add('after:bg-[#ef4056]','text-[#ef4056]');
        
        tabsContent[index].classList.remove('hidden');
    })
});


// tabs_cart



// modal

function show_modal(e){
    let modal=e.querySelector('.modal');
    if(modal.classList.contains('hidden')){
        modal.classList.remove('hidden');
    }
}

function hide_modal(event){
    event.stopPropagation();
       let modal = document.querySelectorAll('.modal');
        modal.forEach(items=>{
        if(!items.classList.contains('hidden')){
            items.classList.toggle('hidden')
        }
})
}

// modal



// loader

let loader=document.querySelector('.loader');
setTimeout(()=>{
    loader.classList.add('hidden')
},0)

// loader

// theme_mode

const darkMode=document.documentElement;
const switchMode=document.getElementById('switchMode');

const currentTheme=localStorage.getItem("theme") || "light";
darkMode.classList.toggle("dark",currentTheme==="dark");

switchMode.addEventListener('click',()=>{
    darkMode.classList.toggle('dark');
    localStorage.setItem('theme',darkMode.classList.contains('dark') ? "dark" : "light");
})


// theme_mode

// to_top_footerBtn
const scrollToTop=document.querySelectorAll('.scrollToTop');
scrollToTop.forEach((item)=>{
    item.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
})
// to_top_footerBtn





// footer_text

let more_text = document.querySelectorAll('.more_text');

more_text.forEach((items)=>{
    items.addEventListener('click',()=>{
        const parent = items.parentNode.parentNode;
        let text=parent.firstElementChild.querySelector('p');
        let mask=parent.firstElementChild.firstElementChild;
        text.classList.toggle('h-[100px]');
        mask.classList.toggle('hidden');
        items.innerText=text.classList.contains('h-[100px]') ? "مشاهده بیشتر" : "بستن";
    });
})


// footer_text

// cart_dropDown

let dropDownBtn=document.querySelectorAll('.dropDownBtn')
let dropDownContent=document.querySelectorAll('.dropDownContent')

dropDownBtn.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        event.stopPropagation();
        const menu=btn.parentNode.parentNode.querySelector(".dropDownContent");
        menu.classList.toggle('hidden');
    });
});
window.addEventListener('click',(event)=>{
    if(!event.target.classList.contains('dropDownBtn')){
        dropDownContent.forEach((menu)=>{
            menu.classList.add('hidden');
        })
    }

})


// cart_dropDown



let show_more_text_btn=document.querySelectorAll('.show_more_text_btn')

show_more_text_btn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const text=btn.parentNode.querySelector('.text_tow_line');
        text.classList.remove('text_lower');
        text.classList.add('text_full');
        btn.style.display='none';
    })
})