
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const isDev = async () => (process.env.NODE_ENV.toLowerCase() === 'development');

(async () => {
  if (await isDev()) console.log(await isDev());
})();
