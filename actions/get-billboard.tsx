import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

export default async function getBillboard(id: string): Promise<Billboard> {
  const response = await fetch(`${URL}/${id}`, {next: { revalidate: 0 }});

  return response.json();
}