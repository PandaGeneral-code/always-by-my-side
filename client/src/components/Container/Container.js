import React, { useCallback, useEffect, useRef, useState } from "react";

import Wrapper, { MaskContainer } from "./styled";

const Container = () => {
  const wrapperRef = useRef();
  const [containerCoordinates, setContainerCoordinates] = useState(null);
  const [maskWidth, setMaskWidth] = useState(0);
  const [pointerCoordinates, setPointerCoordinates] = useState(null);

  const handleMouseLeave = useCallback(() => {
    setPointerCoordinates(() => null);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setPointerCoordinates(() => ({ x: e.clientX, y: e.clientY }));
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    setContainerCoordinates(() => wrapper.getBoundingClientRect());
    wrapper.addEventListener("mouseleave", handleMouseLeave);
    wrapper.addEventListener("mousemove", handleMouseMove);
    return () => {
      wrapper.addEventListener("mouseleave", handleMouseLeave);
      wrapper.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseLeave, handleMouseMove]);

  useEffect(() => {
    if (pointerCoordinates) {
      setMaskWidth(() => containerCoordinates?.right - pointerCoordinates?.x);
    } else {
      setMaskWidth(() => 0);
    }
  }, [containerCoordinates, pointerCoordinates]);

  return (
    <Wrapper ref={wrapperRef}>
      <div className="rectangle" />
      <div className="outer" />
      <div className="inner" />
      <div className="button" />
      <MaskContainer maskWidth={maskWidth} />
    </Wrapper>
  );
};

export default Container;
