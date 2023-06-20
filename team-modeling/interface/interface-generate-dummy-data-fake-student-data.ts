/**
 * 가짜 학생 데이터 객체
 * @type {Object}
 * @property {number} order - 순서
 * @property {string} studentName - 학생 이름
 * @property {boolean} isExperiencedManager - 경험 있는 팀장 여부
 * @property {string[]} belongToTeamList - 속한 팀 리스트 다음 절차에 동적으로 넣기위해 비워둠
 */

interface FakeStudentData {
  order: number;
  studentName: string;
  isExperiencedManager: boolean;
  belongToTeamList: string[];
}

export default FakeStudentData;
