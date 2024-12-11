상태관리는 거의 context + recoil + use-query 사용


필요한 라이브러리 설치
npm install recoil react-query

cshop1 최상위 폴더

변환된 코드
store.js를 Context API, Recoil, React Query로 변경


Recoil (userState):

Context API (CartContext):

React Query (비동기 데이터 가져오기):
```
src/
├── recoil/
│   └── userState.js       // Recoil 관련 파일
├── context/
│   └── CartContext.js     // Context API 관련 파일
├── queries/
│   └── productQueries.js  // React Query 관련 파일
├── AppProvider.js         // 전체 Provider 래핑 파일
├── App.js                 // React App 진입 파일

```

![4](https://github.com/user-attachments/assets/a1ca0479-0ca2-4512-9590-9431eb56d131)




![3](https://github.com/user-attachments/assets/e671454e-261a-4acc-8183-6e1999f898a5)


![2](https://github.com/user-attachments/assets/ce0991b4-c1e6-493a-969c-d9fe8103f5a7)




. React Query
비동기 데이터 관리를 위한 React Query 라이브러리입니다.


npm install react-query


. Recoil
상태 관리를 위한 Recoil 라이브러리


npm install recoil



npm start
