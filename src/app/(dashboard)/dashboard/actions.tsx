import { createSupabaseServerClient } from "@/utils/supabase-server"

import { Database } from "@/types/supabase.db"
import { Weight } from "@/types/weight"

export type SplitGroup = Database["public"]["Tables"]["split_group"]["Row"]

export async function getUserWeight(user_id: string): Promise<Weight[]> {
  const supabase = createSupabaseServerClient()

  const { data, error } = await supabase
    .from("weight")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false })

  if (error) {
    console.log(error)
  }

  return data as Weight[]
}

export async function getUserSplit(user_id: string): Promise<SplitGroup[]> {
  const supabase = createSupabaseServerClient()

  const { data, error } = await supabase
    .from("split_group")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false })

  if (error) {
    console.log(error)
  }

  return data as SplitGroup[]
}
