// p태그 노드 생성하기
var newP = document.createElement("p");
var newText = document.createTextNode("주문이 완료되었습니다.");
newP.appendChild(newText);
document.body.appendChild(newP);

// 속성 만들기1
var attr = document.createAttribute("class");
attr.value = "accent";
newP.setAttributeNode(attr);

// 속성 만들기2
// newP.setAttribute("class", "accent");