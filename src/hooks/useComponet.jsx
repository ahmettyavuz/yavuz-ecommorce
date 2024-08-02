import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../actions/clientAction"; // Path to your actions

export const useComponent = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);
  const loading = useSelector((state) => state.client.loading);
  const error = useSelector((state) => state.client.error);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return { roles, loading, error };
};
