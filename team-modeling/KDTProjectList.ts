import KDTBuildProjectTeam from "./KDTBuildProjectTeam";

// Todo : Project 목록을 확인할 수 있는 클래스여야 한다.
// work : getter로 처리함
class KDTProjectList {
  [key: string]: object;
  constructor(...projectName: string[]) {
    for (const name of projectName) {
      this[name] = {};
    }
  }

  get getProjectList(): string[] {
    return Object.keys(this);
  }
}
