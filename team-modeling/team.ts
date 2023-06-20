const demoStudent: {
  studentName: string;
  teamProjectC: string[];
  teamProjectA: string[];
  teamProjectB: string[];
} = {
  studentName: "kongukjae",
  teamProjectC: [],
  teamProjectA: [],
  teamProjectB: []
};
// * demoStudent
// Todo : 한명의 학생은 이미 진행된 두개의 프로젝트의 멤버정보가 담겨 있어야 한다.
// Todo : 진행되지 않은 하나의 팀은 이미 진행된 프로젝트 멤버와 되도록 겹치지 않아야 한다.

const demoTeam: {
  teamNumber: number;
  teamName: string;
  members: string[];
  getMembers: () => string[];
} = {
  teamNumber: 0,
  teamName: "KDT",
  members: [],

  getMembers: function (): string[] {
    return this.members;
  }
};

// * demoTeam
// Todo : 팀 정보는 멤버의 정보를 담고 있어야 한다.
// Todo : 필요하다면 언제든지 팀멤버 명단을 배열로 가져올 수 있어야 한다.

const demoDataStructureStudent: {
  name: string;
  teamProjectC: string;
  teamProjectA: string;
  teamProjectB: string;
} = {
  name: "kongukjae",
  teamProjectC: "홍길동",
  teamProjectA: "춘향이",
  teamProjectB: "그린컴"
};

function demoTeamDecision(totalStudent: string[], teamName: string[]): object {
  let value: object = {};
  return value;
}

function demoGenerateStudent() {}

function demeSortTeamList(...names: string[]): string[] {
  let value: string[] = [];
  return value;
}

/**
 * work : 1. 24명의 학생마다의 데이터를 생성한다.
 * work : 2. 결정 되었던 팀 객체 생성
 * work : 2-1. 1개의 팀은 구성원이 나타나야 한다.
 */
