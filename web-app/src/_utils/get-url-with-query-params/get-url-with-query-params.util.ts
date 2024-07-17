const getUrlWithQueryParams = (
  url: string,
  queryParams: Record<string, string>
) => {
  const searchParams = new URLSearchParams();
  Object.entries(queryParams).forEach(([key, value]) => {
    searchParams.append(key, value);
  });

  return `${url}?${searchParams.toString()}`;
};

export { getUrlWithQueryParams };
