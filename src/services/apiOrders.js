import supabase from "./supabase";

export async function getOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }

  console.log(data);

  return data;
}
