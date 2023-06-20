/**
 * 가짜 학생 데이터를 생성하는 라이브러리
 * 공식문서를 통해 확인하며 faker.js 활용
 */

import { faker } from "@faker-js/faker/locale/ko";

/**
 * 가짜 학생 데이터를 생성하는 함수
 * @param generateCount - 생성할 학생 데이터의 개수
 * @param teamCount - 팀의 개수
 * @returns 생성된 가짜 학생 데이터 배열
 */

function generateDummyStudentData(generateCount: number, teamCount: number): object[] {
  const totalDummyStudentData: object[] = [];

  /**
   * 가짜 이름을 생성하는 함수
   * @returns 가짜 이름
   */

  const fakerMakeFullName = (): string => {
    let fakeFullName = faker.person.lastName() + faker.person.firstName();
    return fakeFullName;
  };
  /**
   * 랜덤한 true/false 배열을 생성하는 함수
   * @param totalLength - 전체 길이
   * @param teamCount - true로 설정할 개수
   * @returns true/false로 구성된 배열
   */
  const generateRandomBooleanArray = (totalLength: number, teamCount: number): boolean[] => {
    let array: boolean[] = [];
    for (let i = 0; i < teamCount; i++) {
      array.push(true);
    }
    for (let i = 0; i < totalLength - teamCount; i++) {
      array.push(false);
    }
    for (let i = totalLength - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // 구조분해 할당 앞 뒤 위치를 바꿈(랜덤으로)
    }

    return array;
    // 총 학생 인원 수 중, 정해진 수량만큼 true를 랜덤으로 배열에 배치하고, 나머지는 false로 채운다.
  };

  const getRandomTrueArray = generateRandomBooleanArray(generateCount, 10);

  for (let i: number = 0; i < generateCount; i++) {
    /**
     * 가짜 학생 데이터 객체
     * @type {Object}
     * @property {number} order - 순서
     * @property {string} studentName - 학생 이름
     * @property {boolean} isExperiencedManager - 경험 있는 팀장 여부
     * @property {string[]} belongToTeamList - 속한 팀 리스트 다음 절차에 동적으로 넣기위해 비워둠
     */
    const fakeStudentData: {
      order: number;
      studentName: string;
      isExperiencedManager: boolean;
      belongToTeamList: string[];
    } = {
      order: i + 1,
      studentName: fakerMakeFullName(),
      isExperiencedManager: getRandomTrueArray[i],
      belongToTeamList: []
    };
    totalDummyStudentData.push(fakeStudentData);
  }

  return totalDummyStudentData;
}

export default generateDummyStudentData;
/**
 * [
  {
    order: 1,
    studentName: "홍길동",
    isExperiencedManager: true,
    belongToTeamList: []
  },
  {
    order: 2,
    studentName: "김철수",
    isExperiencedManager: false,
    belongToTeamList: []
  },
  {
    order: 3,
    studentName: "이영희",
    isExperiencedManager: true,
    belongToTeamList: []
  },
]
 */
