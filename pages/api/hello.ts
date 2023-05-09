import { useFetchNotionData } from "@/hooks/useFetchNotionData/useFetchNotionData";

const ServerSideNotionData = async (req, res) => {
  const data = await useFetchNotionData();

  res.status(200).json(data);
};
