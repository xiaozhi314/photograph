'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef } from 'react';
export type ShellActionId = "ctrl-curator-logout";
type Handler = () => void | Promise<void>;
type Actions = {
  register: (id: ShellActionId, handler: Handler) => () => void;
  invoke: (id: ShellActionId) => Promise<boolean>;
};
const Context = createContext<Actions | null>(null);
export function ShellActionsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const handlers = useRef(new Map<ShellActionId, Handler>());
  const register = useCallback((id: ShellActionId, handler: Handler) => {
    handlers.current.set(id, handler);
    return () => {
      if (handlers.current.get(id) === handler) handlers.current.delete(id);
    };
  }, []);
  const invoke = useCallback(async (id: ShellActionId) => {
    const handler = handlers.current.get(id);
    if (!handler) return false;
    await handler();
    return true;
  }, []);
  return <Context.Provider value={{
    register,
    invoke
  }} data-api-unique-id='shellactions-r46674be052f4d84e-s1319683768' data-api-unique-page-name='src/components/layout/backend/ShellActions'>{children}</Context.Provider>;
}
export function useShellActions() {
  const value = useContext(Context);
  if (!value) throw new Error('ShellActionsProvider is required');
  return value;
}
export function useShellAction(id: ShellActionId, handler: Handler) {
  const latest = useRef(handler);
  latest.current = handler;
  const {
    register
  } = useShellActions();
  useEffect(() => register(id, () => latest.current()), [id, register]);
}