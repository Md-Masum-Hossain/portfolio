export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/projects', '/skills', '/contact'],
    },
  };
}
