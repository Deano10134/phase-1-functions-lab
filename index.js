// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  // Returns the distance from HQ in blocks
  return Math.abs(blocks - 42);
}
function distanceFromHqInFeet(blocks) {
  // Returns the distance from HQ in feet
  return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(start, destination) {
  // Returns the distance travelled in feet
  return Math.abs(start - destination) * 264;
}
function calculatesFarePrice(start, destination) {
  // Returns the fare price for the trip
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
// Test cases