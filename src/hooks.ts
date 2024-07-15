import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDipatch } from "./storeTrial";

export const useAppDispatch: () => AppDipatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
