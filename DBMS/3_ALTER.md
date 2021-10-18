# ALTER

## 1. 테이블 ALTER

movie100 테이블 생성

### 1. 테이블 이름 변경

```sql
ALTER TABLE 이전테이블명 RENAME TO 변경테이블명;
```

### 2. 테이블 컬럼 추가

```sql
ALTER TABLE 바꿀테이블명 ADD(추가컬럼명 컬럼타입);
```

### 3. 컬럼 타입 변경

```sql
ALTER TABLE 테이블명 MODIFY(변경할컬럼 변경할타입);
```

### 4. 컬럼명 변경

```sql
ALTER TABLE 테이블명 RENAME COLUMN 변경할커럼 TO 변경할이름;
```

### 5. 컬럼 삭제

```sql
ALTER TABLE 테이블명 DROP(컬럼명);
```

### 6. 테이블 삭제

```sql
TRUNCATE TABLE 테이블명; --데이터만 모두 삭제
DROP TABLE 테이블며; -- 테이블 자체를 삭제
```
