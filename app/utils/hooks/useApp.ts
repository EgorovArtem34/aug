'use client'
import { useContext } from "react";
import { AppContext } from './../contexts/AppContext';
import { IAppContext } from "@/app/types";

export const useApp = () => useContext(AppContext) as IAppContext;
