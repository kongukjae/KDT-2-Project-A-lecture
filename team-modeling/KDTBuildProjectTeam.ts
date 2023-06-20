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
