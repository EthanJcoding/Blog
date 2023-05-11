import { GetStaticProps } from "next";

import {
  useFetchNotionData,
  NotionDataItem,
} from "@/hooks/useFetchNotionData/useFetchNotionData";

interface Props {
  data: NotionDataItem[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return useFetchNotionData();
};

export default function Archive({ data }: Props) {
  console.log(data);

  return <section>hi</section>;
}
