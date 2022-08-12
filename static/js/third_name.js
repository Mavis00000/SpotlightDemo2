function initMultiElement() {
  //產生div.dropdown 和 label區塊
  var multiElement = document.createElement('div');
  multiElement.setAttribute('class', 'dropdown');
  var html = `<div class="item text">
    <label></label>
  </div>`;

  //forEach 原本的 ListBox (剛剛有先設class="multi-selector"), 取出option value 在寫成新的結構
  document.querySelectorAll('.multi-selector option').forEach(function (optionItem) {
    html += `<div class="item">
    <input type="checkbox" value="${optionItem.value}"/>
    <span>${optionItem.text}</span>
  </div>`
  })
  multiElement.innerHTML = html;
  document.querySelector('.multi-selector').parentElement.appendChild(multiElement);
  setMultiElementEvent(); //設定點擊事件
}

function setMultiElementEvent() {
  // foreach checkbox 設定 click 事件
  document.querySelectorAll('.item input[type="checkbox"]').forEach(function (checkItem) {
    checkItem.addEventListener("click", function (e) {
      //紀錄有被選到的選項value
      let resultText = '';
      let checkedItems = document.querySelectorAll('.item input:checked[type="checkbox"]')
      checkedItems.forEach(function (selectItem) {
        if (resultText !== '')
          resultText += ','
        resultText += selectItem.value
      })

      //把被勾選的value寫入Label
      document.querySelector('.dropdown .text label').innerText = resultText
      //找原本的ListBox value相等的元素，同時做勾選或取消
      document.querySelector('.multi-selector option[value="' + e.srcElement.value + '"]').selected = e.srcElement.checked
    });
  })
}

window.onload = function () {
  initMultiElement();
}

let btn=document.querySelector("#show");
let infoModal=document.querySelector("#infoModal");
btn.addEventListener("click", function(){
  infoModal.showModal();
})
let close=document.querySelector("#close");
close.addEventListener("click", function(){
  infoModal.close();
})

// test
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation(); // it will not propagate the action to parent for closing
});