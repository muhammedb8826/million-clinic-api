const uploadMaxBytes = 250 * 1024 * 1024; // 250 MB

export default () => ({
  upload: {
    config: {
      sizeLimit: uploadMaxBytes,
    },
  },
});
