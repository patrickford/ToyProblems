function printRange(start, end) {
  console.log(start)
  if (start == end) {
    return;
  }
  return printRange(start+1, end);
}