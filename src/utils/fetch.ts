import { ApiResponse } from "@/interfaces/Response.interface";

const fetchRequest = async (
  baseurl: string,
  endpoint: string,
  data: any = null,
  method = "GET"
): Promise<ApiResponse> => {
  let response: Response;
  if (method === "GET") {
    response = await fetch(`${baseurl}/${endpoint}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
  } else {
    response = await fetch(`${baseurl}/${endpoint}`, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  console.log("sisiis", response);
  return response.json();
};

export { fetchRequest };
