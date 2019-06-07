/*
@license

dhtmlxGantt v.5.2.0 Professional Evaluation
This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
Gantt.plugin(function(t){!function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(i){return t[i]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="/codebase/",e(e.s=191)}({191:function(i,e){t.config.quickinfo_buttons=["icon_delete","icon_edit"],t.config.quick_info_detached=!0,t.config.show_quick_info=!0,t.attachEvent("onTaskClick",function(i){return setTimeout(function(){t.showQuickInfo(i)},0),!0}),function(){for(var i=["onEmptyClick","onViewChange","onLightbox","onBeforeTaskDelete","onBeforeDrag"],e=function(){return t._hideQuickInfo(),!0},n=0;n<i.length;n++)t.attachEvent(i[n],e)}(),t.templates.quick_info_title=function(t,i,e){return e.text.substr(0,50)},t.templates.quick_info_content=function(t,i,e){return e.details||e.text},t.templates.quick_info_date=function(i,e,n){return t.templates.task_time(i,e,n)},t.templates.quick_info_class=function(t,i,e){return""},t.showQuickInfo=function(i){if(i!=this._quick_info_box_id&&this.config.show_quick_info){this.hideQuickInfo(!0);var e=this._get_event_counter_part(i,6);e&&(this._quick_info_box=this._init_quick_info(e,i),this._quick_info_task=i,this._quick_info_box.className=t._prepare_quick_info_classname(i),this._fill_quick_data(i),this._show_quick_info(e,6),this.callEvent("onQuickInfo",[i]))}},t._hideQuickInfo=function(){t.hideQuickInfo()},t.hideQuickInfo=function(i){var e=this._quick_info_box;this._quick_info_box_id=0;var n=this._quick_info_task;if(this._quick_info_task=null,e&&e.parentNode){if(t.config.quick_info_detached)return this.callEvent("onAfterQuickInfo",[n]),e.parentNode.removeChild(e);e.className+=" gantt_qi_hidden","auto"==e.style.right?e.style.left="-350px":e.style.right="-350px",i&&(e.style.left=e.style.right="",e.parentNode.removeChild(e)),this.callEvent("onAfterQuickInfo",[n])}},t.event(window,"keydown",function(i){27==i.keyCode&&t.hideQuickInfo()}),t._show_quick_info=function(i,e){var n=t._quick_info_box;if(t.config.quick_info_detached){n.parentNode&&"#document-fragment"!=n.parentNode.nodeName.toLowerCase()||t.$task_data.appendChild(n);var o=n.offsetWidth,_=n.offsetHeight,a=this.getScrollState(),c=this.$task.offsetWidth+a.x-o;n.style.left=Math.min(Math.max(a.x,i.left-i.dx*(o-i.width)),c)+"px",n.style.top=i.top-(i.dy?_+i.height+2*e:0)+"px"}else n.style.top="20px",1==i.dx?(n.style.right="auto",n.style.left="-300px",setTimeout(function(){n.style.left="10px"},1)):(n.style.left="auto",n.style.right="-300px",setTimeout(function(){n.style.right="10px"},1)),n.className+=" gantt_qi_"+(1==i.dx?"left":"right"),t.$root.appendChild(n)},t._prepare_quick_info_classname=function(i){var e=t.getTask(i),n="gantt_cal_quick_info",o=this.templates.quick_info_class(e.start_date,e.end_date,e);return o&&(n+=" "+o),n},t._init_quick_info=function(i,e){var n=t.getTask(e);if("boolean"==typeof this._quick_info_readonly&&this.isReadonly(n)!==this._quick_info_readonly&&(t.hideQuickInfo(!0),this._quick_info_box=null),this._quick_info_readonly=this.isReadonly(n),!this._quick_info_box){var o=this._quick_info_box=document.createElement("div");this._waiAria.quickInfoAttr(o);var _='<div class="gantt_cal_qi_title" '+(r=t._waiAria.quickInfoHeaderAttrString())+'><div class="gantt_cal_qi_tcontent"></div><div  class="gantt_cal_qi_tdate"></div></div><div class="gantt_cal_qi_content"></div>';_+='<div class="gantt_cal_qi_controls">';for(var a=t.config.quickinfo_buttons,c={icon_delete:!0,icon_edit:!0},f=0;f<a.length;f++)if(!this._quick_info_readonly||!c[a[f]]){var r=t._waiAria.quickInfoButtonAttrString(t.locale.labels[a[f]]);_+='<div class="gantt_qi_big_icon '+a[f]+'" title="'+t.locale.labels[a[f]]+'" '+r+"><div class='gantt_menu_icon "+a[f]+"'></div><div>"+t.locale.labels[a[f]]+"</div></div>"}_+="</div>",o.innerHTML=_;t.event(o,"click",function(i){i=i||event,t._qi_button_click(i.target||i.srcElement)}),t.event(o,"keypress",function(i){var e=(i=i||event).which||event.keyCode;13!=e&&32!=e||setTimeout(function(){t._qi_button_click(i.target||i.srcElement)},1)}),t.config.quick_info_detached&&t.event(t.$task_data,"scroll",function(){t.hideQuickInfo()})}return this._quick_info_box},t._qi_button_click=function(i){var e=t._quick_info_box;if(i&&i!=e){var n=i.className;if(-1!=n.indexOf("_icon")){var o=t._quick_info_box_id;t.$click.buttons[n.split(" ")[1].replace("icon_","")](o)}else t._qi_button_click(i.parentNode)}},t._get_event_counter_part=function(i,e){var n=t.getTaskNode(i);if(!n)return null;for(var o=0,_=e+n.offsetTop+n.offsetHeight,a=n;a&&"gantt_task"!=a.className;)o+=a.offsetLeft,a=a.offsetParent;var c=this.getScrollState();return a?{left:o,top:_,dx:o+n.offsetWidth/2-c.x>t.$container.offsetWidth/2?1:0,dy:_+n.offsetHeight/2-c.y>t.$container.offsetHeight/2?1:0,width:n.offsetWidth,height:n.offsetHeight}:null},t._fill_quick_data=function(i){var e=t.getTask(i),n=t._quick_info_box;t._quick_info_box_id=i;var o={content:t.templates.quick_info_title(e.start_date,e.end_date,e),date:t.templates.quick_info_date(e.start_date,e.end_date,e)},_=n.firstChild.firstChild;_.innerHTML=o.content,_.nextSibling.innerHTML=o.date,t._waiAria.quickInfoHeader(n,[o.content,o.date].join(" ")),n.firstChild.nextSibling.innerHTML=t.templates.quick_info_content(e.start_date,e.end_date,e)}}})});