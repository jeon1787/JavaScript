// 2번(마지막) 노드를 0번(첫) 노드 앞으로 이동
var nameList = document.querySelector("#nameList");
nameList.insertBefore(nameList.children[2], nameList.children[0]);

// 첫 X표시(span) 삭제
var firstDel = document.querySelectorAll(".del")[0];
var firstP = document.querySelectorAll("p")[0];
firstP.removeChild(firstDel);