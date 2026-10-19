const jobs = [1, 2, 3, 4, 5];

export function sum(list: number[]) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i] ?? 0;
  }

  return total;
}

console.log(sum(jobs));
