//create a getUser function that will return the user object from Supabase

import { createClient } from "@/supabase/server";

export const getUser = async (email: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user", error);
    return null;
  }

  return data;
};
