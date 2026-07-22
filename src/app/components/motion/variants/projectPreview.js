export const projectPreviewVariant = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: d,
    },
  }),
}
