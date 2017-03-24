function appendNode() {
   var objNode = document.getElementById("myDiv");
   var strText = "段落四";
   var objNewNode = document.createElement("P");
   var objTextNode = document.createTextNode(strText);
   objNode.appendChild(objNewNode);
   objNewNode.appendChild(objTextNode);
}
function insertNode(objNode, objBrother, strText) {
   var objNode = document.getElementById("myDiv");
   var objBrother = objNode.children[1];
   var strText = '段落一.二';
   var objNewNode = document.createElement("P");
   var objTextNode = document.createTextNode(strText);
   objNode.insertBefore(objNewNode, objBrother);
   objNewNode.appendChild(objTextNode);
}
function printChilds(objNode) {
   var strMsg = "節點名稱 =" + objNode.nodeName + "\n";
   if (objNode.hasChildNodes()) {
      var nodeCount = objNode.children.length;
      strMsg += "子元素數 = " + nodeCount + "\n";
      for (var i = 0; i < nodeCount; i++)
         strMsg += "標籤名稱 = " + objNode.children[i].nodeName + "\n";
      alert(strMsg);
   }
}
function deleteChild(objParent, objNode) {
   var strMsg = "刪除標籤 = " + objNode.nodeName + "\n";
   strMsg += "刪除標籤的子節點數  = " + objNode.children.length + "\n";
   objParent.removeChild(objNode);
   alert(strMsg);
}
