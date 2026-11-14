export const projectPreviewVariant = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: d,
    },
  }),
};
