export const fadeInVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const slideFromTop = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export const slideFromBottom = {
  hidden: {
    y: "100%",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}
