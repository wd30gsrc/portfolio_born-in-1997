<template>
  <div class="scroll">
    <span class="scroll__text">Scroll</span>
  </div>
</template>

<style scoped lang="scss">
.scroll {
  width: 20px;
  height: 30px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 10px;
  position: relative;
}
.scroll::before {
  content: '';
  display: block;
  background: #000000;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease infinite;
}

.scroll__text {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
}

@keyframes scroll {
  0% {
    opacity: 0;
    transform: translateY(0px) translateX(-50%);
  }
  10% {
    opacity: 1;
    transform: translateY(0px) translateX(-50%);
  }
  100% {
    opacity: 0;
    transform: translateY(10px) translateX(-50%);
  }
}

@media screen and (max-width: 768px) {
  .scroll {
    bottom: 0;
  }
}
</style>
