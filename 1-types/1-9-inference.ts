// 2.14 타입 추론은 무엇이고, 써도 되나?

/**
 * Type inference (타입 추론)
 */
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello");

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);

// ✨ 정확하게 타입을 명시하는 것이 좋다.
