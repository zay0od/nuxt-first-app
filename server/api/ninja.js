export default defineEventHandler(async (event) => {
  //request path: api/ninja

  //[1] Get query params
  const query = getQuery(event);

  //[2] Ger Post Body params
  const body = await readBody(event);

  //[3] We can call private APIs here also
  //{ Call CurrencyLit API with an API-Key} -> API-Keys are not and data is not exposed on the Browser 

  return {
    message: `Hello, ${query?.name || "NA"}! You are ${body?.age} years old`,
  };
});
