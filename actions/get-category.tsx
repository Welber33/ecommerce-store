import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export default async function getCategory(id: string): Promise<Category> {
  const response = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });

  return response.json();
}