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

export default generateRandomBooleanArray;