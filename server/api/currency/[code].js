export default defineEventHandler(async (event) => {
  const { code } = event.context.params;

  //[1] Ideally fetch currecy code data from an API with their API Key

  //[2] To use env vars
  const { appName, public: publicEnvVars } = useRuntimeConfig(event); //this return the server side env vars

  return {
    code,
    added_date: new Date(),
    app_name: appName,
    browser_evars: publicEnvVars,
  };
});
