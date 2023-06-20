/**
 * interface KDTBuildProjectTeam {
 *  teamNumber : 팀 번호
 *  teamName: 학생 이름
 *  teamProjectManagerName: 팀장 이름
 *  teamMembers: 팀원 이름
 * }
 */
interface interfaceKDTBuildProjectTeam {
  teamNumber: number;
  teamName: string;
  teamProjectManagerName: string;
  teamMembers: string[];
}

/**
 * 클래스 KDTBuildProjectTeam 설명
 * @constructor
 * @param {number} teamNumber - 팀 번호
 * @param {string} teamName - 팀 이름
 * @param {string} teamProjectManagerName - 팀장 이름
 * @param {string[]} teamMembers - 팀원 이름
 * @returns {object} - 팀 정보를 담고 있는 객체
 * @example
 * const team = new KDTBuildProjectTeam(1, "KDT", "홍길동", ["춘향이", "그린컴"]);
 */
class KDTBuildProjectTeam implements interfaceKDTBuildProjectTeam {
  teamNumber: number;
  teamName: string;
  teamProjectManagerName: string;
  teamMembers: string[];

  constructor(
    teamNumber: number,
    teamName: string,
    teamProjectManagerName: string,
    teamMembers: string[]
  ) {
    this.teamNumber = teamNumber;
    this.teamName = teamName;
    this.teamProjectManagerName = teamProjectManagerName;
    this.teamMembers = teamMembers;
  }
}

export default KDTBuildProjectTeam;
