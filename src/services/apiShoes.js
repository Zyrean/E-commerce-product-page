import supabase from "./supabase";

export async function getMenShoes() {
  const { data, error } = await supabase.from("menShoes").select("*");

  if (error) {
    console.error(error);

    throw new Error("Problems getting menShoes data");
  }

  return data;
}

export async function getWomenShoes() {
  const { data, error } = await supabase.from("womenShoes").select("*");

  if (error) {
    console.error(error);

    throw new Error("Problems getting womenShoes data");
  }

  return data;
}

export async function getKidsShoes() {
  const { data, error } = await supabase.from("kidsShoes").select("*");

  if (error) {
    console.error(error);

    throw new Error("Problems getting kidsShoes data");
  }

  console.log(data);

  return data;
}

// export async function getShoesByType() {
//   const { data: shoes, error } = await supabase.from("shoes").select("for");

//   if (error) {
//     console.error(error);

//     throw new Error("Problems getting data");
//   }

//   return shoes;
// }
