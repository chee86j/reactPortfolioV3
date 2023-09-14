import { useEffect } from "react";

class CardTilt {
  constructor(element) {
    this.element = element;
    this.settings = {
      scale: 1,
      perspective: 1000,
      max: 15,
    };

    this.boundOnMouseEnter = this.onMouseEnter.bind(this);
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    this.boundOnMouseLeave = this.onMouseLeave.bind(this);

    this.init();
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener("mouseenter", this.boundOnMouseEnter);
    this.element.addEventListener("mousemove", this.boundOnMouseMove);
    this.element.addEventListener("mouseleave", this.boundOnMouseLeave);
  }

  removeEventListeners() {
    this.element.removeEventListener("mouseenter", this.boundOnMouseEnter);
    this.element.removeEventListener("mousemove", this.boundOnMouseMove);
    this.element.removeEventListener("mouseleave", this.boundOnMouseLeave);
  }

  onMouseEnter(event) {
    this.update(event);
  }

  onMouseMove(event) {
    this.update(event);
  }

  onMouseLeave() {
    this.reset();
  }

  update(event) {
    const rect = this.element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltX = (x - 0.5) * this.settings.max;
    const tiltY = (y - 0.5) * this.settings.max;

    this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${this.settings.scale})`;
  }

  reset() {
    this.element.style.transform = "";
  }
}

function useCardTilt(elementRef) {
  useEffect(() => {
    const element = elementRef.current;
    const tilt = new CardTilt(element);

    return () => {
      tilt.reset();
      tilt.removeEventListeners();
    };
  }, [elementRef]);

  return elementRef;
}

export default useCardTilt;
