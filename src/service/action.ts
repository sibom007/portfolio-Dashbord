"use server";
export const CreateSkills = async (data: any) => {
  console.log(data, "pauload");
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const result = await res.json();
  return result;
};
export const CreateProjects = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}projects`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );
  const result = await res.json();
  return result;
};
export const CreateBlogs = async (data: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const result = await res.json();
  return result;
};
