# PRIMARY KEY(PK)

## 1. 정의

- 테이블 내의 각 ROW마다 달라야 하는 것
- 이것이 동일한 ROW는 없게끔 하는 제약조건
- 한개의 컬럼일 수도 있고 여러개의 컬럼을 조합해서 구성할 수 있음
- 같은 데이터가 여러 건 들어가는 것(DUP)을 방지하는 목적

```
ex)
국민 테이블 : 주민번호
학생 테이블 : 학번
성적표 테이블 : 학번 + 시험일자 + (과목)
```

## 2. 테이블 생성 시에 만드는 방법 3가지

### 2.1

- 제일 많이 사용

```sql
CREATE TABLE 테이블명(
  컬럼명 타입명 PRIMARY KEY
);
```

### 2.2

- 테이블 만들고 PK 만들 때 사용

```sql
CREATE TABLE 테이블명(
  컬럼명 타입명 CONSTRAINT 제약명 PRIMARY KEY
);
```

### 2.3

```sql
CREATE TABLE 테이블명(
  컬럼명 타입명

  CONSTRAINT 제약명 PRIMARY KEY(컬럼명)
);
```

- 제약명 : 테이블명\_PK

## 3. 이미 있는 테이블에 PK 생성하는 방법

```sql
ALTER TABLE 테이블명 ADD CONSTRAINT 제약명 PRIMARY KEY(컬럼명);
```

## 4. 제약조건 정지시키기, 시작하기

```sql
-- 정지
ALTER TABLE 테이블명 DISABLE CONSTRAINT 제약명;
-- 시작
ALTER TABLE 테이블명 ENABLE CONSTRAINT 제약명;
```

- 테이블에 한꺼번에 많은 데이터를 넣고 싶을 경우 정지 후 넣고 시작한다.
