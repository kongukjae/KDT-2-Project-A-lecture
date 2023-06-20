 /**
 * 가짜 학생 데이터를 생성하는 라이브러리
 * 공식문서를 통해 확인하며 faker.js 활용
 */

import { faker } from "@faker-js/faker/locale/ko";

 /**
   * 가짜 이름을 생성하는 함수
   * @returns 가짜 이름
   */

   const fakerMakeFullName = (): string => {
    let fakeFullName = faker.person.lastName() + faker.person.firstName();
    return fakeFullName;
  };

  export default fakerMakeFullName;