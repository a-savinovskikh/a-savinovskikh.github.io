!function(d){var l,i,t="mmenu",a="dividers";d[t].addons[a]={setup:function(){var e=this,n=this.opts[a];this.conf[a];if(d[t].glbl,"boolean"==typeof n&&(n={add:n,fixed:n}),"object"!=typeof n&&(n={}),(n=this.opts[a]=d.extend(!0,{},d[t].defaults[a],n)).type&&this.bind("initMenu:after",function(){this.$menu.addClass(l.menu+"_"+a+"-"+n.type)}),n.add&&this.bind("initListview:after",function(i){var t;switch(n.addTo){case"panels":t=i;break;default:t=i.filter(n.addTo)}t.length&&(t.children("."+l.listitem+"_divider").remove(),t.find("."+l.listview).each(function(){var t="";e.__filterListItems(d(this).children()).each(function(){var i=d.trim(d(this).children("a, span").text()).slice(0,1).toLowerCase();i!=t&&i.length&&(t=i,d('<li class="'+l.listitem+" "+l.listitem+'_divider">'+i+"</li>").insertBefore(this))})}))}),n.fixed){this.bind("initPanels:after",function(){void 0===this.$fixeddivider&&(this.$fixeddivider=d('<ul class="'+l.listview+" "+l.listview+'_fixeddivider"><li class="'+l.listitem+" "+l.listitem+'_divider"></li></ul>').appendTo(this.$pnls).children())});var s=function(i){if(!(i=i||this.$pnls.children("."+l.panel+"_opened")).is(":hidden")){var t=i.find("."+l.listitem+"_divider").not("."+l.hidden),e=i.scrollTop()||0,n="";t.each(function(){d(this).position().top+e<e+1&&(n=d(this).text())}),this.$fixeddivider.text(n),this.$pnls[n.length?"addClass":"removeClass"](l.panel+"_dividers")}};this.bind("open:start",s),this.bind("openPanel:start",s),this.bind("updateListview",s),this.bind("initPanel:after",function(t){t.off(i.scroll+"-"+a+" "+i.touchmove+"-"+a).on(i.scroll+"-"+a+" "+i.touchmove+"-"+a,function(i){t.hasClass(l.panel+"_opened")&&s.call(e,t)})})}},add:function(){l=d[t]._c,d[t]._d,(i=d[t]._e).add("scroll")},clickAnchor:function(i,t){}},d[t].defaults[a]={add:!1,addTo:"panels",fixed:!1,type:null}}(jQuery);