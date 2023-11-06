var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
    // List 추가
    var item = document.querySelector("#item").value;
    if (item != null) { // 공백 pass
        itemList.push(item);
        document.querySelector("#item").value = ""; // input tag 비우기
        document.querySelector("#item").focus(); // input tag 커서
    }

    // List 출력
    showList();
}

function showList() {
    // HTML 작성
    var list = "<ul>"
    for (let i = 0; i<itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; // 개별 id를 첨부
    }
    list += "</ul>";

    // HTML 출력
    document.querySelector("#itemList").innerHTML = list;

    // 출력된 모든 item에 remove event 추가
    var remove = document.querySelectorAll(".close");
    for (let i=0; i<remove.length; i++) {
        remove[i].addEventListener('click', removeList);
    }
}

function removeList() {
    // 해당하는 id를 List에서 제거
    let id = this. getAttribute("id");
    itemList.splice(id, 1);

    // List 출력
    showList();
}