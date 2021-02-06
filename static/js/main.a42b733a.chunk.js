(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{17:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(1),i=t.n(c),n=t(6),r=t.n(n),o=(t(5),t(2)),l=t.p+"static/media/headshot.351b9929.png";var m=function(){return Object(s.jsxs)("section",{className:"about-container",children:[Object(s.jsx)("h1",{className:"about-title",children:"About"}),Object(s.jsx)("div",{className:"card about-card",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("img",{src:l,alt:"".concat(l," of developer"),className:"img-fluid img-responsive"}),Object(s.jsxs)("p",{className:"card-text about-me-content",children:["Born and raised in Philly, I moved to New York City 11 years ago and haven't looked back, aside from my sports allegiances which will never leave Broad Street. My career thus far has been in the finance world working for an asset management company where I was at the helm of a 10- person marketing department. My team was the centralized agency at the heart of this publicly traded company that sold securities and built portfolios in many different real estate sectors. The company also had subsidiaries in technology, research and financial advice. My team worked tirelessly on the innovation, branding, communications and outreach for the entire company and its six business lines.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"I am a go-getter and very ambitious, therefore my determination and organization allows me to work in fast paced environments. My career up to this point has always provided challenging tasks, but it has been a joy at the same time. I\u2019ve worked with very talented people and it\u2019s always pushed me to become better at my craft.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Just last year, I took on a new challenge in the form of something I've always been interested in, web development. For the last six months, I attended the UPenn Coding Bootcamp. Now that I have completed the bootcamp, it has given me a better understanding of both front-end and back-end technologies. Learning to code and putting these skills to use has been very rewarding because I am someone who likes to see my work come to life. Projects get me motivated and learning something new is always fascinating. The next chapter of my career is yet to be written, but I am eager to keep moving onward and upward!"]})]})})]})},d=t(7),j=t(8),b=t(3),h=t(11),p=t(10),u=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=a.call(this,e)).submitForm=s.submitForm.bind(Object(b.a)(s)),s.state={status:""},s}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state.status;return Object(s.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/mjvpzpza",method:"POST",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"name",className:"name-form",children:"Name:"}),Object(s.jsx)("input",{type:"text",name:"name"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"email",className:"email-form",children:"Email address:"}),Object(s.jsx)("input",{type:"email",name:"email"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"message",className:"message-form",children:"Message:"}),Object(s.jsx)("textarea",{name:"message",rows:"5"})]}),"SUCCESS"===e?Object(s.jsx)("p",{children:"Thank you for your note, I'll get back to you shortly!"}):Object(s.jsx)("div",{className:"pt-3",children:Object(s.jsx)("button",{type:"submit",children:"Submit"})}),"ERROR"===e&&Object(s.jsx)("p",{children:"There was an error, please try again!"})]})}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,s=new FormData(t),c=new XMLHttpRequest;c.open(t.method,t.action),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},c.send(s)}}]),t}(i.a.Component);var g=function(){return Object(s.jsxs)("section",{className:"contact-container",children:[Object(s.jsx)("h1",{className:"contact-title",children:"Contact"}),Object(s.jsx)("h5",{className:"contact-text",children:"For all inquiries, feel free to contact me!"}),Object(s.jsx)(u,{})]})};var x=function(){return Object(s.jsx)("footer",{className:"d-flex justify-content-center footer",children:Object(s.jsxs)("div",{className:"flex-row",children:[Object(s.jsx)("div",{className:"px-2",children:Object(s.jsx)("a",{className:"link",href:"https://github.com/bspiewak6",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-github fa-3x"})})}),Object(s.jsx)("div",{className:"px-2",children:Object(s.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/brianspiewak/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-linkedin fa-3x"})})})]})})},f=function(e){var a=e.categories,t=void 0===a?{}:a,c=e.setCurrentCategory;return Object(s.jsx)("nav",{className:"flex-row px-2",children:Object(s.jsx)("ul",{className:"flex-row",children:t.map((function(e){return Object(s.jsx)("li",{className:"mx-4",children:Object(s.jsx)("a",{href:"#".concat(e.name),children:Object(s.jsx)("span",{onClick:function(){c(e.name),document.getElementById("contentScroller").scrollIntoView()},children:e.name})})},e.name)}))})})},O=function(e){var a=e.categories,t=e.currentCategory,c=e.setCurrentCategory;return Object(s.jsx)("div",{className:"big-image",children:Object(s.jsxs)("div",{className:"overlay",children:[Object(s.jsx)("div",{className:"navbar",children:Object(s.jsx)(f,{categories:a,currentCategory:t,setCurrentCategory:c})}),Object(s.jsx)("h1",{className:"name",children:"Brian Spiewak"}),Object(s.jsxs)("div",{className:"flex-row home-links",children:[Object(s.jsx)("div",{className:"px-2",children:Object(s.jsx)("a",{className:"link-home",href:"https://github.com/bspiewak6",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-github fa-3x"})})}),Object(s.jsx)("div",{className:"px-2",children:Object(s.jsx)("a",{className:"link-home",href:"https://www.linkedin.com/in/brianspiewak/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-linkedin fa-3x"})})}),Object(s.jsx)("div",{className:"px-2",children:Object(s.jsx)("a",{className:"link-home",href:"https://stackoverflow.com/users/13668454/brian-spiewak",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-stack-overflow fa-3x"})})})]})]})})},v=t.p+"static/media/simplyreuse.ac34cad8.png",k=t.p+"static/media/tuneout.0efb8b28.png",w=t.p+"static/media/budgettracker.3645f99c.png",N=t.p+"static/media/socialnetwork.58d9a1cd.png",y=t.p+"static/media/devblog.3e5013b1.png",S=[{id:"1",name:"Lite Speed",technologies:["React, MongoDB, Node.js, Express.js API, Mongoose ODM, JWT, Apollo Server, JavaScript, GraphQL "],url:"https://lite-speed.herokuapp.com/",repo:"lite-speed",image:t.p+"static/media/litespeed.bb47e5d4.png"},{id:"2",name:"Developers Everywhere",technologies:["JavaScript, Node.js, Express.js API, Sequelize, MVC Framework, Handlebars.js, MySQL2"],url:"https://sleepy-stream-52263.herokuapp.com/",repo:"developer-techblog",image:y},{id:"3",name:"Simply ReUse",technologies:["Node.js, Express.js, Handlebars.js, MySQL and the Sequelize ORM, HTML, CSS, JavaScript, MVC Framework, fuse.js, Heroku"],url:"https://simplyreuse3.herokuapp.com/",repo:"Simply-ReUse",image:v},{id:"4",name:"Social Network CLI",technologies:["JavaScript, Node.js, Express.js API, MongoDB, Mongoose.js, Moment.js"],url:"https://drive.google.com/file/d/1N7_QbDM4W843a8pjSLmjCFwOU3FIGJo0/view",repo:"social-network",image:N},{id:"5",name:"TuneOut",technologies:["HTML, JavaScript, Materialize CSS, Moment.js, TasteDive Music API, NY Times API"],url:"https://bspiewak6.github.io/music/",repo:"music",image:k},{id:"6",name:"Budget Tracker",technologies:["JavaScript, Express.js, MongoDB, MongoDB Atlas, Mongoose.js, Heroku"],url:"https://budgettrackerbds.herokuapp.com/",repo:"budget-tracker",image:w}],M=function(){return Object(s.jsxs)("section",{className:"project-container",children:[Object(s.jsx)("h1",{className:"project-title",children:"Portfolio"}),Object(s.jsx)("h5",{className:"project-intro",children:"My passion for marketing has grown as my career has progressed. There is no better way to explain than to show you."}),Object(s.jsx)("div",{className:"card-columns",children:S.map((function(e){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-image",children:[Object(s.jsx)("img",{src:e.image,alt:"".concat(e.name," App"),className:"card-img-top"}),Object(s.jsxs)("div",{className:"image-overlay",children:[Object(s.jsx)("h4",{className:"card-title",children:Object(s.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})}),Object(s.jsx)("p",{className:"text-muted",children:Object(s.jsx)("a",{href:"https://github.com/bspiewak6/".concat(e.repo),target:"_blank",rel:"noreferrer",children:"GitHub Repository"})})]})]})},e.repo)}))})]})},C=t(9),I=function(){var e=Object(c.useState)(!1),a=Object(o.a)(e,2),t=a[0],i=a[1];Object(c.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}));var n=function(){!t&&window.pageYOffset>300?i(!0):t&&window.pageYOffset<=300&&i(!1)};return Object(s.jsx)(C.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:50,display:t?"flex":"none"}})},E=t.p+"static/media/html-5.e7638e36.svg",T=t.p+"static/media/apollo.ee3b290c.svg",F=t.p+"static/media/mysql.e5a509a5.svg",L=t.p+"static/media/react.e27571ea.svg",R=t.p+"static/media/mongoose.33e43bac.jpg",A=t.p+"static/media/sequelize.49ad3c7d.svg",B=t.p+"static/media/chromedev.4dba9031.jpg",D=t.p+"static/media/jest.bdea2af6.svg",J=t.p+"static/media/graphql.44a89085.svg",P=t.p+"static/media/css-3.e7a9de36.svg",q=t.p+"static/media/javascript.fd46ca41.svg",z=t.p+"static/media/jquery-icon.9134751e.svg",H=t.p+"static/media/bootstrap.527d0fc0.svg",_=t.p+"static/media/nodejs.5a3a9ca2.svg",Q=t.p+"static/media/materializecss.10537047.svg",U=t.p+"static/media/mongodb-icon.fe9333e9.svg",G=t.p+"static/media/express.7e85c513.svg",Y=[{name:"HTML",image:E},{name:"CSS",image:P},{name:"JavaScript",image:q},{name:"jQuery",image:z},{name:"Bootstrap",image:H},{name:"Materialize",image:Q},{name:"Chrome Dev Tools",image:B},{name:"React",image:L}],V=[{name:"Node.js",image:_},{name:"Express.js",image:G},{name:"MongoDB",image:U},{name:"Mongoose",image:R},{name:"Apollo",image:T},{name:"GraphQL",image:J},{name:"MySQL",image:F},{name:"Sequelize",image:A},{name:"Jest",image:D}],W=function(){return Object(s.jsxs)("section",{className:"skills-container",children:[Object(s.jsx)("h1",{className:"skills-title",children:"Full Stack Proficiencies"}),Object(s.jsx)("h4",{className:"f-skill",children:"Front-End"}),Object(s.jsx)("div",{className:"card-columns",children:Y.map((function(e){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-image",children:[Object(s.jsx)("img",{src:e.image,alt:"".concat(e.name),className:"skill-icon"}),Object(s.jsx)("span",{className:"card-text skill-name",children:e.name})]})},e.name)}))}),Object(s.jsx)("h4",{className:" b-skill",children:"Back-End"}),Object(s.jsx)("div",{className:"card-columns",children:V.map((function(e){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-image",children:[Object(s.jsx)("img",{src:e.image,alt:"".concat(e.name),className:"card-img-top skill-icon"}),Object(s.jsx)("span",{className:"text-center skill-name",children:e.name})]})},e.name)}))})]})};var X=function(){var e=Object(c.useState)([{id:"1",name:"About"},{id:"2",name:"Portfolio"},{id:"3",name:"Skills"},{id:"4",name:"Contact"}]),a=Object(o.a)(e,1)[0],t=Object(c.useState)("About"),i=Object(o.a)(t,2),n=i[0],r=i[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(O,{categories:a,currentCategory:n,setCurrentCategory:r}),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(I,{})}),Object(s.jsx)("main",{id:"contentScroller",children:function(){switch(n){case"Portfolio":return Object(s.jsx)(M,{});case"Skills":return Object(s.jsx)(W,{});case"Contact":return Object(s.jsx)(g,{});default:return Object(s.jsx)(m,{})}}()}),Object(s.jsx)(x,{})]})};r.a.render(Object(s.jsx)(X,{}),document.getElementById("root"))},5:function(e,a,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.a42b733a.chunk.js.map