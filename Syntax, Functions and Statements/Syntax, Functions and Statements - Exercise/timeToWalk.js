function timeToWalk(steps, footprint, speed) {
  let distanceInM = steps * footprint;
  let speedMetersInSec = speed / 3.6
  let time = distanceInM / speedMetersInSec
  let res = Math.floor(distanceInM / 500)

  let timeInMin = Math.floor(time / 60);
  let timeInSec = Math.round(time - (timeInMin * 60));

  let hours = Math.floor(timeInMin / 60)

  let horsToPrint=hours<10?`0${hours}`:`${hours}`
  let minToPrint = (timeInMin % 60) + res;
  minToPrint = minToPrint < 10 ? `0${minToPrint}` : `${minToPrint}`
  let secToPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`
 

  console.log(`${horsToPrint}:${minToPrint}:${secToPrint}`)
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.70, 5.5);

