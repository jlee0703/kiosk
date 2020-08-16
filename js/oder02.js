window.addEventListener('load', work );

function work(){
    const menuUl = document.querySelector('.menu');
    const menuLis = document.querySelectorAll('.menu > li');
        console.log(menuLis);
    const menuImgs = document.querySelectorAll('.menu > li img');
    const menuSpans = document.querySelectorAll('.menu > li span');
    const menuEms = document.querySelectorAll('.menu > li em');

    const imgHolder = document.querySelectorAll('.imgHolder img')
        console.log(imgHolder)
    const imgUl = document.querySelector('.imgUl');

    const noBoxes = document.querySelectorAll('.noBox');
        console.log(noBoxes);
    const minus = document.querySelectorAll('.noBox .minus > p');
    const plus = document.querySelectorAll('.noBox .plus > p');


// 메뉴를 클릭하면 선택 메뉴란에 사진이 추가
    let choiceMenu = [];
    let cost; // ul.menu의 <em> 중 i번째 <em>이 함수 choice를 통해 저장되는 곳
    
    menuUl.addEventListener('click', choice);

    function choice (ev) {
        if (ev.target.tagName !== 'IMG') return;
        // 현재 target이 'IMG'가 아니라면 함수를 종료하고 맞다면,
        choiceMenu.push(ev.target.src);
        // target의 src를 choiceMenu라는 배열에 입력
        for (let i = 0; i < choiceMenu.length; i++){
            imgHolder[i].src = choiceMenu[i];
            // li.imgHolder의 i번째 <img>에 k의 i번째 src를 입력
            imgHolder[i].parentNode.className = 'on';
            // <img>의 부모 li에게 className 'on'을 입력
            cost = ev.target.parentNode.children[2].textContent;
            // ul.menu의 <em> 중 i번째 <em>을 입력
            imgHolder[i].parentNode.children[2].textContent = cost;
        }
    } 

// 위에서 추가된 메뉴 사진들의 하단 버튼으로 주문 수량을 조절하고 금액을 합산
    let count;
    var i = 0;

    imgUl.addEventListener('click', noBoxWork);
    
    function noBoxWork (ev) {
        if (ev.target.parentNode.className === 'plus'){
            count = ev.target.parentNode.parentNode;
            console.log(count)
            count.children[1].children[0].textContent = i++;
            
        } else if (ev.target.parentNode.className  === 'minus'){
            count = ev.target.parentNode.parentNode;
            console.log(count)
            count.children[1].children[0].textContent = i--;
                }        
               if (i === 0) count.children[1].children[0].textContent = 0;
    }

    const oderElem = document.querySelector('.oder');
    
    oderElem.addEventListener('click', reoderWork);

    function reoderWork (ev) {
        
        if (ev.target.className === 'btnReoder') {
            for (let i = 0; i < 5; i++) {
                noBoxes[i].parentNode.className = '';
            } 
        }
    }
}
