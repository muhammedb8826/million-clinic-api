export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL'),
  // Required when Strapi runs behind cPanel/Apache/Nginx reverse proxy
  proxy: env.bool('BEHIND_PROXY', env('NODE_ENV') === 'production'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
