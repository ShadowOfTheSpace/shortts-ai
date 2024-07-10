const getSentencesCount = (text: string) => {
  return (text.match(/[.!?]/g) ?? []).length;
};

export { getSentencesCount };
