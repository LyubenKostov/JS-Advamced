function dayOfTheWeek (day){
   let dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  switch (day){
      case 'Monday':
          console.log(1);
          break;
      case 'Tuesday':
          console.log(2)
          break;
      case 'Wednesday':
          console.log(3);
          break;
      case 'Thursday':
          console.log(4);
          break;
      case 'Friday':
          console.log(5);
          break;
      case 'Saturday':
          console.log(6);
          break;
      case 'Sunday':
          console.log(7);
          break;

      default:
          console.log('error');
          break;
  }
}