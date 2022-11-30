
function chk() {
    // 아이디 변수 받기
    var idbox1 = document.jslogin.idbox1;
    var idbox1Str = idbox1.value;
    var idbox1Len = idbox1Str.length;


    // 비밀번호 변수 받기
    var passwordbox1 = document.jslogin.passwordbox1;
    var passwordbox1Str = passwordbox1.value;
    var passwordbox1Len = passwordbox1Str.length;


    // 아이디 및 패스워드 입력 받기
    if (idbox1Str == '') {
        alert('아이디를 입력하시오');
    }
    else if (idbox1Len < 8 || idbox1Len >= 15) {
        alert('아이디를 9자리 이상, 15자리 이하로 입력하시오');
    } else {
        if (passwordbox1Str == '') {
            alert('패스워드를 입력하시오');
            return false;
        }
        else if (passwordbox1Len <= 10 || passwordbox1Len >= 20) {
            alert('패스워드를 10자리 이상, 20자리 이하로 입력하시오');
        }
    }
}

// 로그인 및 여러 버튼들
function log() {
    alert('로그인 쉬~일패!')
}

function join() {
    alert('회원가입을 찾으러 갑니다...')
}

function ide() {
    alert('아이디를 찾으러 갑니다...')
}

function pass() {
    alert('비밀번호를 찾으러 갑니다...')
}
