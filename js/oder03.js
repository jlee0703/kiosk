window.addEventListener('load', work );

// 1. 상단 이미지를 선택하여 순차적으로 하단 li에 on을 주고 li 속 이미지자리에 선택된 이미지의 src를 입력
// 2. 선택한 이미지의 가격을 하단 li.priceSum에 입력
// 3. btn을 누르면 숫자가 10까지 증가하거나 1까지 감소. 숫자가 10까지 다다르면 '더 이상 주문할 수 없다'는 알림창이 생성. 숫자가 0에 다다르면 자동적으로 li에 on을 삭제
// 4. btnReoder를 누르면 선택한 모든 메뉴가 삭제
// 5. btnOder를 누르면 '주문이 완료되었습니다.' 알림창이 생성

function work(){

const menuBoard = document.querySelectorAll('.menuBoard'); // 메뉴를 가져올 곳
const choiceMenus = document.querySelectorAll('.imgUl > li'); // 메뉴를 가져다 놓을 곳
const minus = document.querySelectorAll('.minus > input');
const plus = document.querySelectorAll('.plus > input');
const priceSum = document.querySelector('.priceSum > em');
const imgEls = document.querySelectorAll('.menuBoard img');

let srcElems;
let emElems;

for (let i = 0; i < menuBoard.length; i++) {
    menuBoard[i].onclick = clickWork;
    menuBoard[i].vItem = i; // menuBord에 가상의 item을 배열로 만든다
}

    function clickWork(ev) {
        const crrNum = this.vItem;
        if (choiceMenus[crrNum].className === 'on'){ 
            return
        } else {
            srcElems = this.children[0].src; // 선택한 메뉴의 src를 가져온다
            altEls = this.children[0].alt // 선택한 메뉴의 alt를 가져온다

            emElems = this.children[2].textContent // 선택한 메뉴의 가격을 가져온다

            choiceMenus[crrNum].className = 'on'; // 가져다 놓을 곳을 on한다
            choiceMenus[crrNum].children[0].src = srcElems; // on한 곳에 src를 넣는다
            choiceMenus[crrNum].children[0].alt = altEls;
            choiceMenus[crrNum].children[2].textContent = emElems; // 가격을 넣는다
            console.log(emElems)

            one = menuBoard[0].children[2].textContent;
            two = menuBoard[1].children[2].textContent; 
            three = menuBoard[2].children[2].textContent; 
            four = menuBoard[3].children[2].textContent;   
            priceSum.textContent = Number(emElems) + Number(priceSum.textContent); 
        } 
}

// 메뉴 금액에 관한 변수
var one;
var two;
var three;
var four;
let selectedMenu;
let selectedPrice;
let addPrice;

for (let i = 0; i < plus.length; i++) {
    plus[i].onclick = plusWork;
    minus[i].onclick = minusWork;
}

    function plusWork(e) { // 주문 수량을 증가시키는 함수
        selectedMenu = this.parentNode.parentNode;
        selectedMenu.children[1].firstChild.textContent++;
        console.log(this)
        
        
        // 가격 할당
        // for (let i = 0; i < imgEls.length; i++) {
        //     imgEls[i].vNum = i;
        //     var vNum = imgEls[i].vNum;
        //     if (selectedMenu.parentNode.children[0].alt === imgEls[i].alt) {
        //         selectedPrice = imgEls[i].parentNode.children[2].textContent;
        //     }
        // }
        console.log(selectedMenu.parentNode.children[2].textContent)
        // 클릭시 가격이 배수로 증가
        // this.parentNode.parentNode.parentNode.children[2].textContent = selectedPrice
        addPrice = this.parentNode.parentNode.parentNode.children[2].textContent;
        

        // 총합계
        one = choiceMenus[0].children[2].textContent;
        two = choiceMenus[1].children[2].textContent;
        three = choiceMenus[2].children[2].textContent;
        four = choiceMenus[3].children[2].textContent;
        priceSum.textContent = Number(one) + Number(two) + Number(three) + Number(four);
    }

    function minusWork(e) { // 주문 수량을 감소시키는 함수
        if (this.parentNode.parentNode.children[1].firstChild.textContent !== '1'){
            this.parentNode.parentNode.children[1].firstChild.textContent--;
            var costSum = this.parentNode.parentNode.parentNode.children[2].textContent;
            this.parentNode.parentNode.parentNode.children[2].textContent = costSum / 2;
            priceSum.textContent = Number(priceSum.textContent) - Number(this.parentNode.parentNode.parentNode.children[2].textContent)
        } else return;
        
    } 

    const btnReset = document.querySelector('.btnReset');
    const btnOrder = document.querySelector('.btnOrder');

    btnReset.onclick = function (ev) { // 선택한 메뉴를 reset시키는 함수
        for (let i = 0; i < 4; i++){
            choiceMenus[i].className = '';
            plus[i].parentNode.parentNode.children[1].firstChild.textContent = '1';
            priceSum.textContent = '0';
        }
    }

    btnOrder.onclick = function orderWork(ev) { // 주문 버튼 실행에 관한 함수
        var getConfirm = confirm('주문을 완료하시겠습니까?');
        if (getConfirm == true) {
            for (let i = 0; i < 4; i++) {
                choiceMenus[i].className = '';
                priceSum.textContent = '0';
            }
            alert('주문이 완료되었습니다. 감사합니다.');
        } else return;
    }

const admin = document.querySelector('.admin');

    admin.onclick = function confirmWork (ev) { // 관리자 메뉴에 관한 함수
        const adminPw = prompt('관리자 번호를 입력하세요.');
        if (adminPw === '1234'){
            let pwConfirm = alert('관리자 페이지로 이동합니다');
        } else {
            alert('관리자 번호가 일치하지 않습니다. 다시 확인해 주십시오')
        } 
    }




}
        
        
        








