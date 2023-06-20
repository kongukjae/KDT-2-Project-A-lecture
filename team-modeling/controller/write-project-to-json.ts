/**
 * todo : 1. 프로젝트 목록 생성하기
 * todo : 2. 프로젝트 목록 마다 메타데이터 심기
 * todo : 3. 모두 완료되었다면, json으로 저장하기
 */

// built-in modules
import fs from "fs";
import path from "path";
// import modules
import ClassProjectList from "../class-build/class-build-project-obejct-assemble";
import ClassMetaDataTeam from "../class-build/class-build-project-object-teaminformation";

const projectList = new ClassProjectList("projectC","projectA", "projectB");

/**
 * teamNumber: number, -> forEach() 1번째 매개변수로 해결 
 * teamName: string, -> 다른 json 파일에서 reading 해서 해결
 * teamProjectManagerName: string, 다른 json 파일에서 reading 해서 해결
 * teamMembers: string[] -> 다른 json 파일에서 reading 해서 해결
 */


projectList.getProjectList.forEach((projectName, index) => {
  console.log(projectName);
  console.log(index);

  projectList[projectName] = new ClassMetaDataTeam(index + 1, "KDT", "공욱재", ["피카츄", "라이츄", "파이리", "꼬부기"]);
});

console.log(projectList);
