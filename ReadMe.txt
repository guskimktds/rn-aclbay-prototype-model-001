# Service flow
# Login flow

사용자ID 와 Password 를 비교해서 로그인 여부를 판단한다.
사용자ID 를 기준으로 계정이 없는 경우 알림
ID, PW Validation 체크

UserMain : 로그인 시 메인화면
UserRegister : 회원가입



UserMain 에서 ID, PW 입력 후 로그인 버튼 클릭 시
ACLMain 화면으로 이동

# 패스워드 변경, 패스워드 초기화, 회원탈퇴 는 추후 개발

ACLMain 화면은 기본적으로 거래목록을 보여준다.

거래등록은 왼쪽 상단에 탭메뉴를 통해서 이동한다.


SharedPreferences 를 사용해서 사용자 토큰을 저장하고 사용
npm install react-native-default-preference --save


oauth token basic auth 방식
처리 시 body: 'grant_type=password&username=USERID&password=PASSWORD'
로 처리해야 정상 동작, formdata 로 만들어 처리시 Network request failed 발생
