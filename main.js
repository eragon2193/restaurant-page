(()=>{"use strict";document.getElementById("content");const e=document.getElementById("Menu"),t=document.getElementById("About"),n=document.getElementById("Contact"),o=()=>{const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)};e.addEventListener("click",(()=>{o(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("menu"),[{name:"Dragon Roll Sushi",price:"12.50E",image:"sushi"},{name:"Spicy Dragon Bowl",price:"13.00E",image:"bowl"},{name:"Dragon Chicken",price:"14.00E",image:"chicken"},{name:"Dragon Fruit Bowl",price:"12.00E",image:"fruit"}].forEach((e=>{(e=>{const n=document.createElement("div");n.classList.add("food-card");const o=document.createElement("div");o.classList.add("food-text");const a=document.createElement("h3");a.innerText=e.name;const r=document.createElement("p");r.innerText=e.price;const s=document.createElement("img");s.src=`../src/${e.image}.jpg`,o.append(a,r),n.append(o,s),t.append(n)})(e)})),e.append(t)}()})),t.addEventListener("click",(()=>{o(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("about-us");const n=document.createElement("p");n.innerText="Welcome to Dragon's Den, a one-of-a-kind restaurant that promises to take you on a culinary journey through the mystical world of dragons. Our restaurant is designed to transport you to a world of fantasy and adventure, where you can feast on delicious food inspired by the legendary creatures themselves.";const o=document.createElement("p");o.innerText="Our team of chefs is highly skilled and passionate about creating unique dishes that will tantalize your taste buds. They use only the freshest ingredients, carefully sourced to ensure the highest quality and flavor. Whether you're in the mood for something spicy, sweet, or savory, our menu has something for everyone.";const a=document.createElement("p");a.innerText="We are committed to providing our guests with the best possible dining experience, and we strive to exceed your expectations every time you visit. Our friendly staff is always on hand to answer your questions, make recommendations, and ensure that you have a memorable time at Dragon's Den.We are committed to providing our guests with the best possible dining experience, and we strive to exceed your expectations every time you visit. Our friendly staff is always on hand to answer your questions, make recommendations, and ensure that you have a memorable time at Dragon's Den.";const r=document.createElement("p");r.innerText="So come and join us at Dragon's Den, where you can indulge in delicious food, immerse yourself in a world of fantasy, and discover the magic of dragons. We look forward to welcoming you!",t.append(n,o,a,r),e.append(t)}()})),n.addEventListener("click",(()=>{o(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("contact-us");const n=document.createElement("form"),o=document.createElement("p");o.innerText="Our adress is: 1450 Dragonfire Boulevard, Suite 101, Mystic Falls, CA 90210.";const a=document.createElement("p");a.innerText="Our contact  phone number is: +1 (555) 777-8888";const r=document.createElement("input");r.id="email";const s=document.createElement("label");s.htmlFor="email",s.innerText="Your email",r.type="email",r.required=!0;const i=document.createElement("textarea");i.cols=50,i.rows=20;const c=document.createElement("button");c.type="submit",c.innerText="Send";const d=document.createElement("h2");d.innerText="You can also leave a message below!",n.append(d,s,r,i,c),t.append(a,o,n),e.append(t)}()}))})();