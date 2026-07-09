import { useEffect } from "react";

export function useCollapseTWE() {
  useEffect(componentDidMount, []);
  function componentDidMount() {
    initTWE({ collapse });
  }
}
