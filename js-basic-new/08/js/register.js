function newRegister() {
    // p 생성
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    // span 생성
    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBtn.setAttribute("class", "del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);
    
    // 생성한 p를 nameList div 노드에 추가
    var nameList = document.querySelector("#nameList");
    //nameList.appendChild(newP); //마지막에 새로운 이름을 추가할 때
    nameList.insertBefore(newP, nameList.childNodes[0]); //새로운 이름을 가장 앞에 추가할 때
    userName.value = "";
    
    // 삭제 이벤트 추가
    var removeBtns = document.querySelectorAll(".del");
    for (let i=0; i<removeBtns.length; i++) {
        removeBtns[i].addEventListener("click", function(){
            if (this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }
}