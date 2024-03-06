import supabase from "./supabase";

export async function getShoes() {
  const { data: ShoesData, error } = await supabase.from("Shoes").select("*");
  console.log(ShoesData);

  if (error) {
    console.error(error);

    throw new Error("Problems getting ShoesData");
  }

  return ShoesData;
}
