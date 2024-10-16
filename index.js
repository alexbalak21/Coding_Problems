function marge(intersections = []) {
  const result = []
  let [min, max] = intersections[0].sort()
  intersections.forEach((intersection) => {
    intersection = intersection.sort()
    if (intersection[1] < min || intersection[0] > max) result.push[intersection]
    else result.push([min < intersection[0] ? min : intersection[0], max > intersection[1] ? max : intersection[1]])
  })
}

console.log("Test")
