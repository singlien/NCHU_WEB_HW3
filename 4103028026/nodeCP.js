function appendNode(strText) {
    var objNode = document.getElementById("output");
    //  var strText = "段落四";
    var objNewNode = document.createElement("tr");
    var objNewSubNode = document.createElement("td");
    var objTextNode = document.createTextNode(strText);
    objNode.appendChild(objNewNode);
    objNewNode.appendChild(objNewSubNode);
    objNewSubNode.appendChild(objTextNode);
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
    // alert(strMsg);
}

function createTable() {
    var name = document.getElementById('Name').value;
    var sexRadio = document.getElementsByName('sex');
    var sex;
    for (var i = 0; i < sexRadio.length; i++) {
        if (sexRadio[i].checked) {
            sex = sexRadio[i].value;
            break;
        }
    }
    var BirthYear = document.getElementById('BirthYear').value;
    var BirthMonth = document.getElementById('BirthMonth').value;
    var BirthDay = document.getElementById('BirthDay').value;
    var selfIntro = document.getElementById('self-intro').value;
    var objNode=document.getElementById("output");

    // console.log(objNode.children.length);
    if(objNode.children.length!=0){
        // printChilds(objNode);
        deleteTable();
    }
    if(name!="")
        appendNode('姓名：' + name);
    else{
                confirm();
        return;
    }

    appendNode('性別：' + sex);

    if(BirthYear!="" || BirthMonth!="" || BirthDay!="")
        appendNode('生日：' + BirthYear + '/' + BirthMonth + '/' + BirthDay);
    else{
        confirm();
        return;
    }
    
    appendNode('自我介紹：' + selfIntro);

    // '<tr><td>姓名：'+name+'</td></tr>'+
    // '<tr><td>性別：'+sex+ '</td></tr>'+
    // '<tr><td>出生年月日：'+BirthYear+'/'+BirthMonth+'/'+BirthDay+'</td></tr>'+
    // '<tr><td>自我介紹：'+selfIntro+'</td></tr>'
}

function deleteTable(){
  var objNode=document.getElementById("output");
  while(objNode.children.length!=0){
    deleteChild(objNode,objNode.children[0]);
  }
  alert('已刪除全部子標籤');
}
