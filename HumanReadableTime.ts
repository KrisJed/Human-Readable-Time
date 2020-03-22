function humanReadable(seconds : number) : string {
  let timeArr : number[] = [0,0,0];
  if (seconds % 3600 >= 0) {
    const hours : number = Math.floor(seconds / 3600);
    timeArr[0] = hours;
    seconds -= (hours * 3600);
  }
  if (seconds % 60 >= 0) {
    const minutes : number = Math.floor(seconds / 60);
    timeArr[1] = minutes;
    seconds -= (minutes * 60);    
  }
  timeArr[2] = seconds;

  let timeArrString : string[] = timeArr.map( time  => {
    return time.toString();
    });

  timeArrString = timeArrString.map( time => {
    if (time.length < 2) {
      return `0${time}`;
    }
    return time;
  });

  let humanTime : string = timeArrString.join(':');
  return  humanTime;
}
