const getHashTagsString = (hashtags: string[] | null) => {
  if (!hashtags) {
    return null;
  }

  return `#${hashtags?.join(" #")}`;
};

export { getHashTagsString };
