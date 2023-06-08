import { keyframes } from "styled-components";

const animations = {
  fadeIn: keyframes`
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`,

  slideUpIntroText: keyframes`
  0% {
    bottom: 10%;
    opacity: 0;
  }
  25% {
    bottom: 30%;
    opacity: 1;
  }
  100% {
    bottom: 30%;
    opacity: 0;
  }
`,

  recordAnimation: keyframes`
  0% { opacity: 0% }
  100% { opacity: 100% }
`,

  slideUpQuestionTitle: keyframes`
  0% {
    bottom: 35%;
    opacity: 0;
  }
  50% {
    bottom: 35%;
    opacity: 1;
  }
  70% {
    bottom: 50%;
    opacity: 1;
  }
`,

  recordQuestionAnimation: keyframes`
  0% { opacity: 0% }
  75% { opacity: 0% }
  90% { opacity: 0% }
  100% { opacity: 100% }
`,
};

export default animations;
