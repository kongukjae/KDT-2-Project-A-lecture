// interface
import FakeStudentData from "../../interface/interface-generate-dummy-data-fake-student-data";

// 만든 모듈들 import
import fakerMakeFullName from "./generate-dummy-module/faker-make-full-name";
import generateRandomBooleanArray from "./generate-dummy-module/generate-random-boolean-array";

/**
 * 가짜 학생 데이터를 생성하는 함수
 * @param generateCount - 생성할 학생 데이터의 개수
 * @param teamCount - 팀의 개수
 * @returns 생성된 가짜 학생 데이터 배열
 */

const generateDummyStudentData = (generateCount: number, teamCount: number): object[] => {
  // return init
  const totalDummyStudentData: object[] = [];

  // module call
  const getRandomTrueArray = generateRandomBooleanArray(generateCount, 10);

  // execute
  for (let i: number = 0; i < generateCount; i++) {
    
    const fakeStudentData: FakeStudentData = {
      order: i + 1,
      studentName: fakerMakeFullName(),
      isExperiencedManager: getRandomTrueArray[i],
      belongToTeamList: []
    };
    totalDummyStudentData.push(fakeStudentData);
  }

  return totalDummyStudentData;
};

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
