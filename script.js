"use strict"

let div1=document.createElement('div');
div1.className='pg2div1';
document.body.append(div1);

let h3=document.createElement('h3');
h3.id='head-tag';
h3.innerText='Page Not Found';

let p1=document.createElement('p');
p1.id='par1';
p1.innerText='Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site'

let a1=document.createElement('a');
a1.id='a-tag';
a1.innerHTML='<a href="index.html"> <- Back to our site </a>';

let hr=document.createElement('hr');
hr.id='hr-tag';

let p2=document.createElement('p');
p2.id='para2';

let x='If this is your site, and you weren\'t expecting a 404 for this path, please visit netlify\'s <a href="index1.html">"page not found" support guide </a> troubleshooting tips.';
p2.innerHTML=x;

div1.append(h3,p1,a1,hr,p2);

