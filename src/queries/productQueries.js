import { useQuery } from "react-query";

export function useFetchProducts() {
  return useQuery("products", async () => {
    const response = await fetch("/api/products"); // API URL 수정 필요
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
