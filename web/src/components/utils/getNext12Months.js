export default function getNext12Months(startDate) {
  let date = new Date(startDate);
  const holidays = [
    new Date("2022-01-01"), // New Year's Day
    new Date("2022-03-21"), // Botswana Day
    new Date("2022-04-27"), // Good Friday
    new Date("2022-04-28"), // Easter Saturday
    new Date("2022-05-01"), // Workers' Day
    new Date("2022-07-15"), // President's Day
    new Date("2022-09-30"), // Botswana Defence Force Day
    new Date("2022-12-25"), // Christmas Day
    new Date("2022-12-26"), // Boxing Day
  ];

  const day = date.getDate();

  let next12Months = [];
  for (let i = 0; i < 12; i++) {
    let nextMonth = date.getMonth() + 1;
    date.setMonth(nextMonth);
    date.setDate(day);

    while (
      holidays.includes(date) ||
      date.getDay() === 0 ||
      date.getDay() === 6
    ) {
      date.setDate(date.getDate() + 1);
    }

    next12Months.push(date.getTime());
  }

  console.log(
    [...next12Months, startDate].map((dat) =>
      new Date(dat).toLocaleDateString("en-US")
    )
  );

  return [startDate, ...next12Months];
}
