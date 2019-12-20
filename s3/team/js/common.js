var $wg = function(id){return document.getElementById(id)};
var viewcss = ['open','close'],showsearch=0,showmenu=0,nPosition;
var firstPic=true,wpArr=[],wpNum=0,csPic=0,litime,limsta=0,limcur=0;
var ascroll,dvalue,bscroll=scrolltopnow(),scrollbtn=$wg('topbtn');
//顶部导航
function opensearch(){
   $wg('search').className = 'search '+viewcss[showsearch];
   (showsearch == 1) ? showsearch = 0 : showsearch = 1;
}
//执行搜索
function gosearch(){
   var keytext = $wg('searchtext').value;
   if(keytext != ''){document.forms.submit();}
}
//返回顶部
function scrolltopnow(){return document.documentElement.scrollTop || document.body.scrollTop;}
function goscrolltop(){
   if(document.documentElement.scrollTop){
      document.documentElement.scrollTop = 0;
   }else{
      document.body.scrollTop = 0;
   }
}

//统计