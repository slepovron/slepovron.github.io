(function(t){function a(a){for(var s,r,l=a[0],o=a[1],c=a[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);b&&b(a);while(u.length)u.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(s=!1)}s&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},r={app:0},n={app:0},i=[];function l(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0f7dbb9e":"ca14aa73","chunk-384d5e1a":"7eb85da5","chunk-485d7556":"64f336f4"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e={"chunk-0f7dbb9e":1,"chunk-384d5e1a":1,"chunk-485d7556":1};r[t]?a.push(r[t]):0!==r[t]&&e[t]&&a.push(r[t]=new Promise((function(a,e){for(var s="css/"+({}[t]||t)+"."+{"chunk-0f7dbb9e":"f7d9a4c5","chunk-384d5e1a":"d0b6a3a3","chunk-485d7556":"2f3c2ad0"}[t]+".css",n=o.p+s,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===n))return a()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===s||d===n)return a()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=a,b.onerror=function(a){var s=a&&a.target&&a.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete r[t],b.parentNode.removeChild(b),e(i)},b.href=n;var v=document.getElementsByTagName("head")[0];v.appendChild(b)})).then((function(){r[t]=0})));var s=n[t];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(a,e){s=n[t]=[a,e]}));a.push(s[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(t);var u=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(b);var e=n[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,e[1](u)}n[t]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var b=d;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),r=e.n(s);r.a},"0d00":function(t,a,e){t.exports=e.p+"img/economics.714ff31e.jpg"},"199c":function(t,a){},"23be":function(t,a,e){"use strict";var s=e("199c"),r=e.n(s);a["default"]=r.a},"3dfd":function(t,a,e){"use strict";var s=e("47d3"),r=e("23be"),n=(e("034f"),e("2877")),i=Object(n["a"])(r["default"],s["a"],s["b"],!1,null,null,null);a["default"]=i.exports},"47d3":function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return r}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[]},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=e("3dfd"),n=(e("d3b7"),e("8c4f")),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Jumbotron"),e("NavigationHome"),e("main",{staticClass:"container flex-shrink-0",attrs:{role:"main"}},[e("a",{attrs:{name:"projects"}}),e("div",{staticClass:"card-columns"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),e("Quotes"),t._m(6),t._m(7),t._m(8),t._m(9)],1)]),e("Footer")],1)},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card bg-dark text-light",attrs:{id:"ad-economics"}},[s("img",{staticClass:"card-img-top",attrs:{src:e("0d00"),alt:"ad-economics"}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title lobster"},[t._v("Дмитрий Акимов")]),s("p",{staticClass:"card-text"},[t._v("Single Page Application для преподавателя экономики. Сайт настроен и сдан заказчику, ожидается наполнение контентом (подробности по учебному процессу и пр.)")]),s("a",{staticClass:"btn btn-outline-light mt-1",attrs:{role:"button",href:"#",target:"_blank"}},[t._v("В работе.")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card bg-dark text-light",attrs:{id:"y-math"}},[s("img",{staticClass:"card-img-top",attrs:{src:e("c1d6"),alt:"y-math"}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title lobster"},[t._v("Online Math Tutor")]),s("p",{staticClass:"card-text"},[t._v(" Landing page для репетитора по математике. Помощь в выборе и настройке хостинга и доменного имени. Сайт собран на основе компонентов библиотеки Bootstrap4. "),s("br"),t._v("Клиент предполагает развитие страницы для продвижения резюме, возможно добавление отзывов от учеников и ссылок на различные ресурсы и материалы используемые в работе репетитора. ")]),s("a",{staticClass:"btn btn-outline-light mt-1",attrs:{role:"button",href:"https://y-math.github.io/",target:"_blank"}},[t._v("Перейти на сайт")]),s("a",{staticClass:"btn btn-outline-light mt-1",attrs:{role:"button",href:"./files/y-math.zip",download:""}},[t._v("Скачать архив")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card black bg-light text-light p-3",attrs:{id:"bulatdesign"}},[e("h4",{staticClass:"card-title lobster"},[t._v('Студия дизайна "Булат"')]),e("p",{staticClass:"card-text"},[t._v(" Внесение правок по списку заказчика. "),e("br"),t._v("Масштабирование элементов, адаптивная стилизация видео блоков, выравнивание сетки, подключение иконок сайта, работа со шрифтом, активные ссылки. "),e("br"),t._v("Даны рекомендации по обновлению сайта и ускорению загрузки. ")]),e("button",{staticClass:"btn btn-outline-light mt-1",attrs:{href:"#","data-toggle":"modal","data-target":"#bulatdesignModal"}},[t._v("Подробнее")]),e("a",{staticClass:"btn btn-outline-light mt-1",attrs:{role:"button",href:"https://bulatdesign.ru",target:"_blank"}},[t._v("Перейти на сайт")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"bulatdesignModal",tabindex:"-1",role:"dialog","aria-labelledby":"bulatdesignModalTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content bg-light"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"lobster modal-title",attrs:{id:"bulatdesignModalTitle"}},[t._v("Описание работы")]),e("a",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("p",[t._v(" Задача: "),e("br"),t._v("- работа с legacy проектом без исходников и документации, "),e("br"),t._v("- исправить проблемы по списку заказчика, "),e("br"),t._v("- по возможности ускорить загрузку сайта, "),e("br"),t._v("- почистить код на скрытые ошибки. "),e("br"),e("br"),t._v("Исправлено: "),e("br"),t._v("- созданы и подключены иконки - favicon, "),e("br"),t._v("- сайт почищен от нерабочих и пустых ссылок на страницах, "),e("br"),t._v("- исправлены проблемы отступов блоков на мобильной и десктопной версии, "),e("br"),t._v("- удален или исправлен невалидный код HTML страниц (незакрытые и пустые элементы, ошибки вложенности, нерабочие классы), "),e("br"),t._v("- исправлены/добавлены/удалены CSS стили необходимые для корректной работы, "),e("br"),t._v("- добавлена стилизация и сокрытие элементов навигации для мобильной версии, "),e("br"),t._v("- настроены и стилизованы адаптивные блоки видео, "),e("br"),t._v("- исправлены проблемы отображения шрифта на мобильных версиях, "),e("br"),t._v("- укорена загрузка сайта за счет сжатия изображений (суммарно на 30%), "),e("br"),t._v("- найден оригинальный шаблон сайта, "),e("br"),t._v("- частично исправлена проблемы сетки сайта возникающая на кириллических шрифтах, "),e("br"),t._v("- процесс исправлений и результат работы предоставлен заказчику в виде веб-страницы на github. "),e("br"),e("br"),t._v("UPD: "),e("br"),t._v("- спустя год сайт обновлен заказчиком самостоятельно на конструкторе tilda, от использования старой версии сайта отказались "),e("br")])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{"data-dismiss":"modal"}},[t._v("Закрыть")]),e("a",{staticClass:"btn btn-outline-dark",attrs:{role:"button",href:"https://bulatdesign.ru",target:"_blank"}},[t._v("Перейти на сайт")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card black bg-dark text-light p-3",attrs:{id:"elenapro"}},[e("h4",{staticClass:"card-title lobster"},[t._v("Elena Pro")]),e("p",{staticClass:"card-text"},[t._v(" Сайт-портфолио для мастера макияжа, татуажа, укладки, стрижки, грима и глобального создания красоты. "),e("br"),t._v("Создан на основе шаблона с применением популярных элементов анимации, открытых библиотек шрифтов Ionic и FontAwesome и колоночной разбивки Masonry. ")]),e("button",{staticClass:"btn btn-outline-light mt-1",attrs:{href:"#","data-toggle":"modal","data-target":"#elenaproModal"}},[t._v("Подробнее")]),e("a",{staticClass:"btn btn-outline-light mt-1",attrs:{role:"button",href:"https://елена-про.рф/",target:"_blank"}},[t._v("Перейти на сайт")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"elenaproModal",tabindex:"-1",role:"dialog","aria-labelledby":"elenaproModalTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content bg-light"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"lobster modal-title",attrs:{id:"elenaprolTitle"}},[t._v("Описание работы")]),e("a",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("p",[t._v(" Задача: "),e("br"),t._v("- создать статический сайт для мастера макияжа, "),e("br"),t._v("- настроить мобильную версию, "),e("br"),t._v("- разместить страницу на недорогом хостинге, "),e("br"),e("br"),t._v("Сделано: "),e("br"),t._v("- сайт собран на основе бесплатного шаблона, "),e("br"),t._v("- заказчик предложил взять сайт на поддержку. "),e("br"),t._v("- доменное имя и хостинг выбраны с учетом пожеланий заказчика. "),e("br"),t._v("Запланировано: "),e("br"),t._v("- добавление страниц по мере необходимости, "),e("br"),t._v("- поиск SEO специалиста для продвижения сайта. "),e("br")])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{"data-dismiss":"modal"}},[t._v("Закрыть")]),e("a",{staticClass:"btn btn-outline-dark",attrs:{role:"button",href:"https://елена-про.рф/",target:"_blank"}},[t._v("Перейти на сайт")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card black bg-dark text-light p-3 frozed",attrs:{id:"vingil"}},[e("h4",{staticClass:"card-title lobster"},[t._v("Vingil")]),e("p",{staticClass:"card-text"},[t._v(" Создание сайта-магазина на WordPress на основе выбранной заказчиком темы. "),e("br"),t._v("Полный цикл работ, от выбора хостинга до помощи клиенту в администрировании полученного магазина. ")]),e("a",{staticClass:"btn btn-outline-light mt-1",attrs:{role:"button",href:"#"}},[t._v("Проект заморожен")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card black bg-dark text-light p-3",attrs:{id:"massage"}},[e("h4",{staticClass:"card-title lobster"},[t._v("Тибетский массаж")]),e("p",{staticClass:"card-text"},[t._v(" Сайт-визитка для специалиста тибетского массажа и йога-терапии на основе Boilerplate и Bootstrap4 с использованием библиотеки CSS Animate. "),e("br")]),e("a",{staticClass:"btn btn-outline-light mt-1",attrs:{role:"button",href:"https://caring-hands.github.io/"}},[t._v("Перейти на сайт")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"black card bg-secondary p-3",attrs:{id:"tulacafe"}},[e("h4",{staticClass:"card-title lobster"},[t._v("Кондитерская Корица")]),e("p",{staticClass:"card-text"},[t._v(" Создание сайта кафе и темы для использования через систему WordPress. "),e("br"),t._v("Сайт предоставлен в виде статической страницы и архива темы WordPress, в дальнейшем возможно добавление функционала на сайт по желанию заказчика. ")]),e("button",{staticClass:"btn btn-outline-dark mt-1",attrs:{href:"#","data-toggle":"modal","data-target":"#tulacafeModal"}},[t._v("Подробнее")]),e("a",{staticClass:"btn btn-outline-dark mt-1",attrs:{role:"button",href:"https://tulacafe.ru",target:"_blank"}},[t._v("Перейти на сайт")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"tulacafeModal",tabindex:"-1",role:"dialog","aria-labelledby":"tulacafeModalTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content bg-light"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"lobster modal-title",attrs:{id:"tulacafeModalTitle"}},[t._v("Описание работы")]),e("a",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("p",[t._v(" Задача: "),e("br"),t._v("- создать статическую страницу, "),e("br"),t._v("- перенести страницу кафе на WordPress, "),e("br"),t._v("- сделать изменяемые поля для цен и описания. "),e("br"),e("br"),t._v("Сделано: "),e("br"),t._v("- создана страница по требованиям заказчика, "),e("br"),t._v("- создана тема WP, "),e("br"),t._v("- созданы поля для изменения контента пользователем, "),e("br"),t._v("- тема проверена на локальном веб-сервере и передана заказчику для размещения на хостинге. "),e("br"),e("br"),t._v("Не сделано: "),e("br"),t._v("- на данный момент используется только статическая страница. ")])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{"data-dismiss":"modal"}},[t._v("Закрыть")]),e("a",{staticClass:"btn btn-outline-dark",attrs:{role:"button",href:"./files/tulacafe_wp.zip",download:""}},[t._v("Скачать WP архив")])])])])])}],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("header",{staticClass:"jumbotron"},[e("router-link",{staticClass:"logo jumbotron-logo",attrs:{to:"/"}},[e("img",{staticClass:"rounded-circle img-thumbnail",attrs:{src:"https://avatars2.githubusercontent.com/u/27227805?s=460&v=4",width:"170",height:"170",alt:"logo"}})]),t._m(0)],1)])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-right text-white"},[e("h1",{staticClass:"lobster changeableText"},[t._v(" Wladimir "),e("br"),t._v("Sawicki ")]),e("h4",{staticClass:"lobster changeableText"},[t._v("Фронтенд разработчик, ИТ - специалист")])])}],d=(e("cf46"),e("2877")),u={},b=Object(d["a"])(u,o,c,!1,null,"1b7f950e",null),v=b.exports,f=e("fd2d"),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container",attrs:{id:"navtop"}},[e("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light font-weight-bold"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Проекты")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/About"}},[t._v("Обо мне")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/Links"}},[t._v("Ссылки")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/Contacts"}},[t._v("Написать")])],1)])])])])])},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],_=(e("d7c0"),{}),p=Object(d["a"])(_,m,h,!1,null,"d7d159ae",null),g=p.exports,C=e("f404"),k={components:{Jumbotron:v,NavigationHome:g,Footer:f["a"],Quotes:C["a"]}},y=k,x=(e("9829"),Object(d["a"])(y,i,l,!1,null,"220dfd7c",null)),w=x.exports;s["a"].use(n["a"]);var E=new n["a"]({mode:"history",routes:[{path:"/",component:w},{path:"/About",component:function(){return e.e("chunk-0f7dbb9e").then(e.bind(null,"f820"))}},{path:"/Links",component:function(){return e.e("chunk-485d7556").then(e.bind(null,"b398"))}},{path:"/Contacts",component:function(){return e.e("chunk-384d5e1a").then(e.bind(null,"c93c"))}}]});s["a"].config.productionTip=!1,new s["a"]({router:E,render:function(t){return t(r["default"])}}).$mount("#app")},"7d70":function(t,a,e){},"85ec":function(t,a,e){},9829:function(t,a,e){"use strict";var s=e("bf36"),r=e.n(s);r.a},bf36:function(t,a,e){},c1d6:function(t,a,e){t.exports=e.p+"img/y-math.149383bb.jpg"},cf46:function(t,a,e){"use strict";var s=e("7d70"),r=e.n(s);r.a},d7c0:function(t,a,e){"use strict";var s=e("f0ab"),r=e.n(s);r.a},f0ab:function(t,a,e){},f404:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"lobster card text-white bg-dark p-3 text-right"},[e("blockquote",{staticClass:"blockquote mb-0"},[e("p",{attrs:{id:"quoteText"}},[t._v(" "+t._s(t.quote)+" ")]),t._m(0)])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"blockquote-footer"},[e("small",{staticClass:"text-muted"},[t._v(" Макс Фрай "),e("cite",{attrs:{title:"Source Title"}})])])}],n={data:function(){var t=["Если хочешь далеко пойти, нужно уметь не только работать, но и приказывать.","Мы с тобой имеем талант к некоему странному ремеслу, в котором никто ни хрена не понимает!","Когда ты клюешь носом уже, а не еще, пожар на утреннем горизонте впечатляет куда больше!","Чувство ответственности – не лучшее снотворное.","Таков непреложный закон жизни: люди панически боятся неизвестного.","Ждать и надеяться – верный способ скоропостижно рехнуться.","Абсолютно нормальный человек попросту не подходит для нашей работы.","Ты всегда получаешь чего хочешь, рано или поздно, так или иначе…","Первый эксперимент нужно ставить над собой, а не над посторонним человеком.","Нет ничего проще, чем совершить невозможное! Стоит только представить себе, чем ты сейчас будешь заниматься, – и тут же отключаешься. А когда приходишь в себя – все уже позади…","Голова и должна идти кругом, это ее основная обязанность!","Лучше поздно, чем еще позже!","Надо просто делать все, на что ты способен, а не гадать, как сложатся обстоятельства.","Есть вещи, которые следует делать красиво или не делать вовсе…","Прибор, измеряющий время, делает своего обладателя его рабом."],a=Math.floor(Math.random()*t.length),e=t[a];return{quote:e}}},i=n,l=e("2877"),o=Object(l["a"])(i,s,r,!1,null,null,null);a["a"]=o.exports},fd2d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("footer",{staticClass:"container footer mt-auto"},[e("div",{staticClass:"navbar navbar-expand navbar-light bg-light"},[e("div",{staticClass:"social navbar-nav"},[e("a",{staticClass:"nav-item nav-link",attrs:{href:"https://www.linkedin.com/in/wladimir-sawicki-16761499/"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"https://github.com/slepovron"}},[e("i",{staticClass:"fab fa-github"})]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"https://discordapp.com/users/wladimir_korwin#0325"}},[e("i",{staticClass:"fab fa-discord"})]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"https://t.me/wladimir_korwin"}},[e("i",{staticClass:"fab fa-telegram"})]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"https://join.skype.com/invite/mgR1rLxv2B0L"}},[e("i",{staticClass:"fab fa-skype"})])])])])])}],n=e("2877"),i={},l=Object(n["a"])(i,s,r,!1,null,null,null);a["a"]=l.exports}});
//# sourceMappingURL=app.b4c6e1cb.js.map