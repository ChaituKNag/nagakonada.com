export const fadeInVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      when: "beforeChildren",
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
