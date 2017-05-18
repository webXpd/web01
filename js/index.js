// JavaScript Document

		var	bjObj=document.getElementById("banner")
		var jpgObj=document.getElementsByClassName("bannerTu_img").item(0).getElementsByTagName("li")
		var douObj=document.getElementsByClassName("bannerTu_img_dou").item(0).getElementsByTagName("li")
		
		function dian(val){
				for( var i=0;i<5;i++){
				if(val==i){		
			 douObj.item(i).style.backgroundColor="red";
			 jpgObj.item(i).style.display="block";
				}
				else{
					 douObj.item(i).style.backgroundColor="";
					 jpgObj.item(i).style.display="none";
					}
			}
		}
		
		var mo=0;
		var xia;
		function lunbo(){
			xia=mo+1;
			if(mo==4){
				xia=0;
				}
			
			jpgObj.item(mo).style.display="none";
			jpgObj.item(xia).style.display="block";
			douObj.item(mo).style.backgroundColor="";
			douObj.item(xia).style.backgroundColor="red";

			mo++;
			if(mo==5){
				mo=0;
				}
			
			}
			window.setInterval("lunbo()",2000);
			
			
			
			
			
			