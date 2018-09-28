/*global document*/
document.title = "pure css / js";

/* start variables */
const header = document.createElement("header"),
    footer = document.createElement("footer"),
    div = document.createElement("div"),
    h2 = document.createElement("h2"),
    h4 = document.createElement("h4"),
    a = document.createElement("a"),
    ul = document.createElement("ul"),
    li = document.createElement("li"),
    img = document.createElement("img"),
    nav = document.createElement("nav"),
    span = document.createElement("span"),
    icon = document.createElement("i"),
    hr = document.createElement("hr"),
    video = document.createElement("video"),
    source = document.createElement("source"),
    p = document.createElement("p");


/* end variables   */

/* start fixed Nav */

document.body.appendChild(nav.cloneNode());
document.body.children[1].appendChild(span.cloneNode())
    .textContent = "industrious";
document.body.children[1].appendChild(span.cloneNode())
    .textContent = "menu";

/* End fixed Nav*/

/* start header */

document.body.appendChild(header.cloneNode());
document.body.children[2].appendChild(div.cloneNode()).classList.add("overlay");

document.body.children[2].appendChild(div.cloneNode()).classList.add("head-text");
document.body.children[2].children[1].appendChild(h2.cloneNode())
    .textContent = "INDUSTRIOUS";
document.body.children[2].children[1].appendChild(p.cloneNode())
    .textContent = "A responsive business oriented template with a video background designed by TEMPLATED and released under the Creative Commons License.";
/* End header */

/* start collection */

document.body.appendChild(div.cloneNode()).classList.add("collection");

document.body.children[3].appendChild(div.cloneNode()).classList.add("head-content");
document.body.children[3].children[0].appendChild(h2.cloneNode()).textContent = "SEM TURPIS AMET SEMPER";
document.body.children[3].children[0].appendChild(p.cloneNode()).textContent = "In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.";
document.body.children[3].appendChild(div.cloneNode()).classList.add("collects");
var i;
for (i = 0; i < 6; i = i + 1) {

    document.body.children[3].children[1].appendChild(div.cloneNode()).classList.add("collect");
    document.body.children[3].children[1].children[i].appendChild(icon.cloneNode());
    document.body.children[3].children[1].children[i].appendChild(h4.cloneNode());
    document.body.children[3].children[1].children[i].appendChild(p.cloneNode());
    document.body.children[3].children[1].children[i].children[1].textContent = "FEUGIAT CONSEQUAT";
    document.body.children[3].children[1].children[i].children[2].textContent = "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.";
}
// icons 
document.body.children[3].children[1].children[0].children[0].classList.add('fa', 'fa-address-card');
document.body.children[3].children[1].children[1].children[0].classList.add('fa', 'fa-copy');
document.body.children[3].children[1].children[2].children[0].classList.add('fa', 'fa-save');
document.body.children[3].children[1].children[3].children[0].classList.add('fa', 'fa-copy');
document.body.children[3].children[1].children[4].children[0].classList.add('fa', 'fa-home');
document.body.children[3].children[1].children[5].children[0].classList.add('fa', 'fa-xing-square');
/* end collection */

/* start our art*/

document.body.appendChild(div.cloneNode()).classList.add("our-art");
document.body.children[4].appendChild(div.cloneNode()).classList.add("overlay");
document.body.children[4].appendChild(div.cloneNode()).classList.add("Art-text");
document.body.children[4].children[1].appendChild(h2.cloneNode()).textContent = "CURABITUR ULLAMCORPER ULTRICIES";
document.body.children[4].children[1].appendChild(p.cloneNode()).textContent = "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.";

/* end our art*/

/* start testmonial */
document.body.appendChild(div.cloneNode()).classList.add("testimonial"); //right
document.body.children[5].appendChild(div.cloneNode()).classList.add("head-content");//right
document.body.children[5].appendChild(div.cloneNode()).classList.add("items");//right

for (i = 0; i < 3; i = i + 1) { // 5 ~ 1
    document.body.children[5].children[1].appendChild(div.cloneNode()).classList.add("item"); //right
    
    document.body.children[5].children[1].children[i].appendChild(p.cloneNode()).textContent = "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.";//right
    document.body.children[5].children[1].children[i].appendChild(span.cloneNode());
    document.body.children[5].children[1].children[i].appendChild(div.cloneNode());

    document.body.children[5].children[1].children[i].children[2].appendChild(img.cloneNode());
    document.body.children[5].children[1].children[i].children[2].appendChild(p.cloneNode());
    
    document.body.children[5].children[1].children[i].children[2].children[1]
        .appendChild(span.cloneNode());

    document.body.children[5].children[1].children[i].children[2].children[1]
        .appendChild(span.cloneNode());
}
/*

*/

// images 
document.body.children[5].children[1].children[0].children[2].children[0].setAttribute("src", "./images/pic01.jpg");
document.body.children[5].children[1].children[1].children[2].children[0].setAttribute("src", "./images/pic03.jpg");
document.body.children[5].children[1].children[2].children[2].children[0].setAttribute("src", "./images/pic02.jpg");
document.body.children[5].children[1].children[0].children[2].children[1].children[0].textContent = "- Jane Doe ";
document.body.children[5].children[1].children[1].children[2].children[1].children[0].textContent = "- John Doe ";
document.body.children[5].children[1].children[2].children[2].children[1].children[0].textContent = "- Janet Smith ";

//paragraphs 

document.body.children[5].children[1].children[0].children[2].children[1].children[1].textContent = "CEO - ABC Inc.";
document.body.children[5].children[1].children[1].children[2].children[1].children[1].textContent = "CEO - ABC Inc.";
document.body.children[5].children[1].children[2].children[2].children[1].children[1].textContent = "CEO - ABC Inc.";
document.body.children[5].children[0].appendChild(h2.cloneNode()).textContent = "FAUCIBUS CONSEQUAT LOREM";
document.body.children[5].children[0].appendChild(p.cloneNode()).textContent = "In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.";

/* end testmonial */


/* start footer */

document.body.appendChild(footer.cloneNode());
document.body.children[6].appendChild(div.cloneNode()).classList.add("splits");

for (i = 0; i < 3; i = i + 1) {
    document.body.children[6].children[0].appendChild(div.cloneNode()).classList.add("split");

}
// split 1

document.body.children[6].children[0].children[0].appendChild(h2.cloneNode()).textContent = "ACCUMSAN MONTES VIVERRA";

document.body.children[6].children[0].children[0].appendChild(p.cloneNode()).textContent = "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.";

document.body.children[6].children[0].children[1].appendChild(h2.cloneNode()).textContent = "SEM TURPIS AMET SEMPER";

// split 2

for (i = 1; i < 5; i = i + 1) {

    document.body.children[6].children[0].children[1].appendChild(p.cloneNode()).appendChild(a.cloneNode()).setAttribute("href", "#");
    document.body.children[6].children[0].children[1].children[i].children[0].textContent = "Dolor pulvinar sed etiam.";
}

// split 3

document.body.children[6].children[0].children[2].appendChild(h2.cloneNode()).textContent = "MAGNA SED IPSUM";
for (i = 1; i < 5; i = i + 1) {

    document.body.children[6].children[0].children[2].appendChild(div.cloneNode()).classList.add("social");
    document.body.children[6].children[0].children[2].children[i].appendChild(icon.cloneNode());
    document.body.children[6].children[0].children[2].children[i].appendChild(span.cloneNode());

}

// icons 

document.body.children[6].children[0].children[2].children[1].children[0].classList.add("fa", "fa-twitter-square");
document.body.children[6].children[0].children[2].children[2].children[0].classList.add("fa", "fa-facebook-square");
document.body.children[6].children[0].children[2].children[3].children[0].classList.add("fa", "fa-instagram");
document.body.children[6].children[0].children[2].children[4].children[0].classList.add("fa", "fa-github-square");

// spans 

document.body.children[6].children[0].children[2].children[1].children[1].textContent = "Twitter";
document.body.children[6].children[0].children[2].children[2].children[1].textContent = "Facebook";
document.body.children[6].children[0].children[2].children[3].children[1].textContent = "Instagram ";
document.body.children[6].children[0].children[2].children[4].children[1].textContent = " Github";
document.body.children[6].appendChild(span.cloneNode());
document.body.children[6].appendChild(p.cloneNode()).textContent = "this page has been created by Mahmoud gmal";
/* end footer */
