"use strict";

let addbutton = document.getElementById('button'); //idが「button」の要素を取得

//idが「button」の要素がクリックされたら実行

addbutton.addEventListener("click", function() {
    insertRow('sample1_table','txt1');
}, false);

let radioAll = document.getElementById('all');
radioAll.addEventListener('click', function() {
    entryChange1('all');
}, false);

let radioNow = document.getElementById('now');
radioNow.addEventListener('click', function () {
    entryChange1();
}, false);

let radioComplete = document.getElementById('complete');
radioComplete.addEventListener('click', function () {
    entryChange1();
}, false);
/*** ここまで ***/

const addBtn = document.getElementById('button');

const taskContent = document.getElementById('sample1_table');

const duringClass = 'onWork';
const completedClass = 'complete';

let idCount = 1;

const idClass = 'idClass';

const duringText = '作業中';
const completedText = '完了';

const deleteText = '行削除';

addBtn.addEventListener('click', () => {

    const newTask = document.getElementById('txt1');

    const trElement = document.createElement('tr');
    trElement.className = duringClass;

    const idElement = document.createElement('td');
    idElement.textContent = idCount;
    idElement.className = idClass;

    const commentElement = document.createElement('td');
    commentElement.textContent = newTask.value;

    const stateElement = document.createElement('td');
    const stateBtn = document.createElement('button');
    stateBtn.textContent = duringText;

    let stateCount = 0;

    const deleteElement = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = deleteText;

    taskContent.appendChild(trElement);
    trElement.appendChild(idElement);
    trElement.appendChild(commentElement);
    trElement.appendChild(stateElement);
    trElement.appendChild(deleteElement);
    stateElement.appendChild(stateBtn);
    deleteElement.appendChild(deleteBtn);

    idCount++;

    newTask.value = '';

    stateBtn.addEventListener('click', () => {
        stateCount++;
        if (stateCount % 2 === 1) {
            stateBtn.textContent = completedText;
            trElement.className = completedClass;
        } else {
            stateBtn.textContent = duringText;
            trElement.className = duringClass;
        }
    });

    deleteBtn.addEventListener('click', () => {
        trElement.remove();
        const deleteId = idElement.textContent;
        const idElements = document.getElementsByClassName(idClass);
        // 削除したidより大きな値をもつidのみ振り直す
        for (let i = Number(deleteId); i < idElements.length; i++) {
            const idStr = idElements[i].textContent;
            let id = Number(idStr);
            id--;
            idElements[i].textContent = String(id);
        }
    });
});

/**
 * 行削除
 */
function deleteRow(obj) {
    // 削除ボタンを押下された行を取得
    var tr = obj.parentNode.parentNode;
    // trのインデックスを取得して行を削除する
    tr.parentNode.deleteRow(tr.sectionRowIndex);
}
function changeButton(obj2) {
    obj2 = 1;
}

/**
 * 列追加
 */
function insertColumn(id) {
    // テーブル取得
    var table = document.getElementById(id);
    // 行数取得
    var rows = table.rows.length;

    // 各行末尾にセルを追加
    for ( var i = 0; i < rows; i++) {
        var cell = table.rows[i].insertCell(-1);
        var cols = table.rows[i].cells.length;
        if (cols > 10) {
            continue;
        }
        cell.innerHTML = (i + 1) + '-' + (cols - 1);
    }
}

/**
 * 列削除
 */
function deleteColumn(id) {
    // テーブル取得
    var table = document.getElementById(id);
    // 行数取得
    var rows = table.rows.length;

    // 各行末のセルを削除
    for ( var i = 0; i < rows; i++) {
        var cols = table.rows[i].cells.length;
        if (cols < 2) {
            continue;
        }
        table.rows[i].deleteCell(-1);
    }
}

function OnOff(lol){
    var tr = lol.parentNode.parentNode;
    if (lol.value === "作業中") {
        lol.value = "完了";
        tr.className = 'complete';
    } else if (lol.value === "完了") {
        lol.value = "作業中";
        tr.className = 'onWork';
    }
}

function entryChange1() {
    var radio = document.getElementsByName('q1');

    console.log(radio);

    var taskStatus;

    if (radio[0].checked) {
        //フォーム
        taskStatus = document.getElementsByClassName('onWork');
        var i;
        for(i = 0; i < taskStatus.length; i++) {
            taskStatus[i].style.display = "";
        }
        taskStatus = document.getElementsByClassName('complete');
        for(i = 0; i < taskStatus.length; i++) {
            taskStatus[i].style.display = "";
        }

    } else if (radio[1].checked) {
        //フォーム
        taskStatus = document.getElementsByClassName('onWork');
        for(i = 0; i < taskStatus.length; i++) {
            taskStatus[i].style.display = "";
        }
        taskStatus = document.getElementsByClassName('complete');
        for(i = 0; i < taskStatus.length; i++) {
            taskStatus[i].style.display = "none";
        }

    } else if (radio[2].checked) {
        //フォーム
        taskStatus = document.getElementsByClassName('onWork');
        for(i = 0; i < taskStatus.length; i++) {
            taskStatus[i].style.display = "none";
        }
        taskStatus = document.getElementsByClassName('complete');
        for(i = 0; i < taskStatus.length; i++) {
            taskStatus[i].style.display = "";
        }

    }
}

//オンロードさせ、リロード時に選択を保持
// window.onload = entryChange1;