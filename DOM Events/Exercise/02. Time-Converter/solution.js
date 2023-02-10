function attachEventsListeners() {
  // let days = document.getElementById("days");
  // let hours = document.getElementById("hours");
  // let minutes = document.getElementById("minutes");
  // let seconds = document.getElementById("seconds");

  // let rations = {
  //   days: 1,
  //   hours: 24,
  //   minutes: 1440,
  //   seconds: 86400,
  // };

  // document.getElementById("daysBtn").addEventListener("click", onConvert);
  // document.getElementById("hoursBtn").addEventListener("click", onConvert);
  // document.getElementById("minutesBtn").addEventListener("click", onConvert);
  // document.getElementById("secondsBtn").addEventListener("click", onConvert);

  // function convert (value, unit) {
  //   let days = value / rations[unit];

  //   return {
  //       days: days,
  //       hours: days * rations.hours,
  //       minutes: days * rations.minutes,
  //       seconds: days * rations.seconds,
  //   }
  // }

  // function onConvert(event) {
  //   let input = event.target.parentElement.querySelector('input[type="text"]');
  //   let time = convert(Number(input.value), input.id)
  //   days.value = time.days;
  //   hours.value = time.hours;
  //   minutes.value = time.minutes;
  //   seconds.value = time.seconds;
  // }

    const daysInput = document.getElementById('days');
    const hoursInput  = document.getElementById('hours');
    const minutesInput  = document.getElementById('minutes');
    const secondsInput  = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert (event) {

        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        const parent = event.target.parentElement;

        if(parent.textContent.includes('Days')){
            days = Number(parent.querySelector('#days').value);
            hours = days * 24
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Hours')){
            hours = Number(parent.querySelector('#hours').value);
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Minutes')){
            minutes = Number(parent.querySelector('#minutes').value);
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;

        } else if (parent.textContent.includes('Seconds')){
            seconds = Number(parent.querySelector('#seconds').value);
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
        
    }
}
