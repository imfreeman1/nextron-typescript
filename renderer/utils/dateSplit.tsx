const dateSplit = (yearString: string): string => {
  const [, month, day] = yearString.split('-');
  const monthAndDay = `${month}-${day}`;

  return monthAndDay;
};

export default dateSplit;
