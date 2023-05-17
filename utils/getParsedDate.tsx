const getParsedDate = (createdAt: string) => {
  return new Date(createdAt).toLocaleDateString("ko-KR");
};

export { getParsedDate };
