const getWordsCount = (text: string) => {
  return text.trim().split(" ").length;
};

export { getWordsCount };
