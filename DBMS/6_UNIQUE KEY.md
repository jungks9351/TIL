# UNIQUE KEY

## 1. 정의

- 이것이 동일한 row가 없게 하는 제약 조건

## 2. PRIMARY KEY 와 차이점

PK는 테이블에 하나만 존재해야 하지만 UK는 여러개가 존재 가능
NULL을 다른 값으로 본다 (허용)

```sql
CREATE TABLE movie_mast
(
	movie_name varchar2(100),
	open_date varchar2(8)
);

ALTER TABLE movie_mast ADD CONSTRAINT movie_mast_pk
PRIMARY KEY(movie_name);

ALTER TABLE movie_mast ADD CONSTRAINT movie_mast_u1
UNIQUE(open_date);

INSERT INTO movie_mast VALUES('venom', '20211018');
INSERT INTO movie_mast VALUES('venom', '20211018'); -- 실패 PK
INSERT INTO movie_mast VALUES('venom2', '20211018'); -- 실패 UNIQUE KEY
INSERT INTO movie_mast VALUES(NULL,'20211021'); -- 실패 PK NULL 불
INSERT INTO movie_mast VALUES('venom2', null); -- 성공 UNIQUE 는 NULL 미확정으로 봄
INSERT INTO movie_mast VALUES('venom3', null); -- 성공 UNIQUE 는 NULL 미확정으로 봄
SELECT  *FROM movie_mast;
UPDATE movie_mast SET open_date = '20211018'
WHERE movie_name = 'venom3'; -- 실패 UNIQUE KEY 위반 NULL 값은 인정하는데 중복된 값은 불가함
```
