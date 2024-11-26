export default async function customFetch(
  path = "",
  opt?: Parameters<typeof fetch>[1]
) {
  if (path[0] === "/") {
    path = path.slice(1);
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com";

  return fetch(`${baseUrl}/${path}`, {
    ...opt,
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      ...opt?.headers,
    },
  });
}
