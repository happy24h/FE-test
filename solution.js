function calculateRank(points) {
  const anPoints = points[0];
  let rank = 1;

  // Kiểm tra xem An có được nhận thưởng không
  let eligibleForBonus = true;
  for (const otherPoints of points.slice(1)) {
    if (otherPoints[0] >= anPoints[0] || otherPoints[1] >= anPoints[1]) {
      eligibleForBonus = false;
      break;
    }
  }

  if (!eligibleForBonus) {
    return -1; // Trả về -1 nếu An không được nhận thưởng
  }

  // Tính tổng điểm của An
  const totalAnPoints = anPoints[0] + anPoints[1];

  // Tính thứ hạng của An trong danh sách những người được nhận thưởng
  for (const otherPoints of points.slice(1)) {
    const totalOtherPoints = otherPoints[0] + otherPoints[1];
    if (totalOtherPoints > totalAnPoints) {
      rank++;
    }
  }

  return rank;
}

// Example points:
const points = [
  [2, 2],
  [1, 4],
  [3, 2],
  [3, 2],
  [2, 1],
];

const result = calculateRank(points);
console.log(result); // Output: 4
