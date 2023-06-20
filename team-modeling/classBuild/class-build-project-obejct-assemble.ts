/**
 * 클래스 classBuildProjectObejctAssemble 설명
 * @constructor
 * @param {string[]} projectName - 프로젝트 이름
 * @returns {object} - 프로젝트 이름을 키로 하는 객체
 * @example 
 * const projectList = new KDTBuildProjectList("teamProjectA", "teamProjectB" ,"teamProjectC");
 * 
 * @ get getProjectList - 프로젝트 이름을 배열로 반환
 * 접근자(accessor) 이므로 함수가 아님
 * 함수호출 방식이 아닌 변수처럼 사용
 * @example
 * projectList.getProjectList;
 *
 */

class classBuildProjectObejctAssemble {
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

export default classBuildProjectObejctAssemble;