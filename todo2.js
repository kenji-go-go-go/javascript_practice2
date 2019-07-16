"use strict";

let addbutton = document.getElementById('button'); //idが「button」の要素を取得

let radioAll = document.getElementById('all');
radioAll.addEventListener('click', function() {
    entryChange('all');
});

let radioNow = document.getElementById('now');
radioNow.addEventListener('click', function () {
    entryChange();
});

let radioComplete = document.getElementById('complete');
radioComplete.addEventListener('click', function () {
    entryChange();
});
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

// 「作業中」と「完了」の切り替え
    stateBtn.addEventListener('click', () => {
        stateCount++;
        // stateCount:偶数なら作業中、奇数なら完了
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

function entryChange() {
    const radio = document.getElementsByName('q1');

    console.log(radio);

    let taskStatusOnWork = '';
    let taskStatusComplete = '';
    let i = 0;

    taskStatusOnWork = document.getElementsByClassName('onWork');
    taskStatusOnWork = Array.from( taskStatusOnWork ) ;
    taskStatusComplete = document.getElementsByClassName('complete');
    taskStatusComplete = Array.from( taskStatusComplete ) ;

    if (radio[0].checked) {
        //フォーム
        taskStatusOnWork.forEach( function( element ) {
            element.style.display = "";
        });
        taskStatusComplete.forEach( function( element ) {
            element.style.display = "";
        });

    } else if (radio[1].checked) {
        //フォーム
        taskStatusOnWork.forEach( function( element ) {
            element.style.display = "";
        });
        taskStatusComplete.forEach( function( element ) {
            element.style.display = "none";
        });

    } else if (radio[2].checked) {
        //フォーム
        taskStatusOnWork.forEach( function( element ) {
            element.style.display = "none";
        });
        taskStatusComplete.forEach( function( element ) {
            element.style.display = "";
        });
    }
}
