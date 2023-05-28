import { ApiResponse } from "@/interfaces/Response.interface";

const fetchRequest = async (
  baseurl: string,
  endpoint: string,
  data: any = null,
  method = "GET"
): Promise<ApiResponse> => {
  let response: Response;
  if (method === "GET") {
    response = await fetch(`${baseurl}/${endpoint}`);
  } else {
    response = await fetch(`${baseurl}/${endpoint}`, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  return response.json();
};

export { fetchRequest };
