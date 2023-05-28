import { ApiResponse } from "@/interfaces/Response.interface";

const fetchRequest = async (
  endpoint: string,
  data: any = null,
  method = "GET"
): Promise<ApiResponse> => {
  let response: Response;
  if (method === "GET") {
    response = await fetch(process.env.API_URL + `/api/${endpoint}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
  } else {
    response = await fetch(`/api/${endpoint}`, {
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
