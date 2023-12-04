
  const isDigit = (value: any): boolean => {
  return !isNaN(value)};

const getValue = (digits:number[])=>Number(`${digits[0]}${digits[digits.length-1]}`);

export const getCalibrationValue = (line: string):number => {
  const digits = line.match(/\d/g)?.map(match => Number(match));
  return getValue(digits||[])};

export const getCalibrationValue2 = (line:string):number =>{
  const digits = ['one', 'two', 'three','four', 'five', 'six', 'seven', 'eight', 'nine'];
  const parsedDigits =  [...line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)]
        .map(match => match[1])
        .map(match => (isDigit(match) ? Number(match) : digits.indexOf(match) + 1));
  return getValue(parsedDigits)
}


export const day1 = (input: string[]) => {
  const values = input.map((m) => getCalibrationValue(m));
  return values.reduce((a, b) => a + b, 0);
};

export const day1_2 = (input: string[]) => {
  const values = input.map(v=>getCalibrationValue2(v));
  return values.reduce((a, b) => a + b, 0);
};
