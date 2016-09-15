
window.onload = function(){
	var div_flowwer = document.getElementById("flowwer");
	var div_leaf =  document.getElementById("leaf");
	var div_show_flower = document.getElementById("show_flowwer");
	div_show_flower.addEventListener("drop",drop);
	div_show_flower.addEventListener("dragover",allowDrop);
	var div_show_leaf = document.getElementById("show_leaf");
	div_show_leaf.addEventListener("drop",drop);
	div_show_leaf.addEventListener("dragover",allowDrop);

	var flowerarr = [];
	var leafarr = [];
	//create flowwer
	function createFlwwer(){
		for (var i = 0; i <6; i++) {
			var flowwerchild = document.createElement("div");
			flowwerchild.setAttribute("id",i+1);
			flowwerchild.setAttribute("class","flowwerchild");
			flowwerchild.setAttribute("type","flowwer");
			var color_r = parseInt(Math.random()*100+75);
			var color_g = parseInt(Math.random()*100+75);
			var color_b = parseInt(Math.random()*100+75);
			flowwerchild.style.backgroundColor = "rgb("+color_r+","+color_g+","+color_b+")";
			flowwerchild.setAttribute("draggable","true");
			flowwerchild.addEventListener("dragstart",drag);
			div_flowwer.appendChild(flowwerchild);
			flowerarr.push(flowwerchild);
		};
	}createFlwwer();

	//create leaf
	function createLeaf(){
		for (var i = 0; i <6; i++) {
			var leafchild = document.createElement("div");
			leafchild.setAttribute("id",i+1);
			leafchild.setAttribute("class","leafchild");
			leafchild.setAttribute("type","leaf");
			leafchild.setAttribute("draggable","true");
			var color_r = parseInt(Math.random()*100+35);
			var color_g = parseInt(Math.random()*100+35);
			var color_b = parseInt(Math.random()*100+35);
			leafchild.style.backgroundColor = "rgb("+color_r+","+color_g+","+color_b+")";
			leafchild.setAttribute("draggable","true");
			leafchild.addEventListener("dragstart",drag);

			div_leaf.appendChild(leafchild);
			leafarr.push(leafchild);
		};
	}createLeaf();
	

	function allowDrop(ev)
	{
		ev.preventDefault();
	};
	function drag(ev){
		var thisType = ev.target.getAttribute("type");
		ev.dataTransfer.setData("flowwerId",0);
		ev.dataTransfer.setData("leafId",0);
		ev.dataTransfer.setData("showType",0);
		if (thisType == "flowwer") {
			ev.dataTransfer.setData("showType","flowwer");
			ev.dataTransfer.setData("flowwerId",ev.target.id);
		}
		else if(thisType == "leaf"){
			ev.dataTransfer.setData("showType","leaf");
			ev.dataTransfer.setData("leafId",ev.target.id);

		}

	}
	function drop(ev){
		//ev.preventDefault();
		var showtype = ev.dataTransfer.getData("showType");
		if (!showtype) {
			return false;
		};
		var showChildId = 0,getChildColor=0;
		var evDropId = ev.target.getAttribute("id");
		if (showtype == "flowwer" && evDropId=="show_flowwer") {
			showChildId = ev.dataTransfer.getData("flowwerId");
			if (!showChildId) {return false};
			getChildColor = getFlowwerColor(showChildId,1);
			ev.target.setAttribute("flooer_type",showChildId);
		}
		else if (showtype == "leaf" && evDropId=="show_leaf") {
			showChildId = ev.dataTransfer.getData("leafId");
			if (!showChildId) {return false};
			getChildColor = getFlowwerColor(showChildId,2);
			ev.target.setAttribute("left_type",showChildId);
		};
		if (!getChildColor || !showChildId) {return false};
		ev.target.style.backgroundColor = getChildColor;
		
	}
	function getFlowwerColor(id,type)
	{
		var arr;
		if (type == 1) {
			arr = flowerarr;
		}
		else if(type == 2){
			arr = leafarr;
		}
		else{
			return false;

		};
		var bgColor;
		for (var i = 0; i <arr.length; i++) {
			var Child = arr[i];
			if (Child.id== id) {
					bgColor = Child.style.backgroundColor;
			};
		};
		return bgColor;
	}
}
	


