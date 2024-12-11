상태관리는 거의 context + recoil + use-query 사용


필요한 라이브러리 설치
npm install recoil react-query



변환된 코드
store.js를 Context API, Recoil, React Query로 변경


Recoil (userState):

Context API (CartContext):

React Query (비동기 데이터 가져오기):

src/
├── recoil/
│   └── userState.js       // Recoil 관련 파일
├── context/
│   └── CartContext.js     // Context API 관련 파일
├── queries/
│   └── productQueries.js  // React Query 관련 파일
├── AppProvider.js         // 전체 Provider 래핑 파일
├── App.js                 // React App 진입 파일



. React Query
비동기 데이터 관리를 위한 React Query 라이브러리입니다.


npm install react-query


. Recoil
상태 관리를 위한 Recoil 라이브러리


npm install recoil



npm start
