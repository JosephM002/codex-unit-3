import { useState } from "react";

export function Main() {
  const [unmount, setUnmount] = useState(false);
  let mainComponent = <Main setUnmount={setUnmount} />;
  if (unmount) {
    mainComponent = <></>;
  }
  return { mainComponent };
  const { setUnmount } = props;
  function componentDidUnmount() {
    return function () {
      alert("message:");
    };
  }
}
