import supabase from "./supabase";

export async function getShoes() {
  const { data, error } = await supabase.from("shoes").select("*");

  if (error) {
    console.error(error);

    throw new Error("Problems getting data");
  }

  return data;
}
