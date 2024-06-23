import { buildQueries } from "@testing-library/react";
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, getGlobalState} = createGlobalState({
    buscador: '',
})

export { setGlobalState, getGlobalState }