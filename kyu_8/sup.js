//Mila (Sep 5, 2025, 7:11 PM)
// 10. Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
//Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра,
//а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.

let height = 0;
let dayClimb = 0;
const wall = 5;

while (height < wall) {
  dayClimb += 1;
  height += 3;
  if (height >= wall) {
    console.log(
      `It will take snal ${dayClimb} days to reach the top of the wall`
    );
    break;
  }
  height -= 2;
}
