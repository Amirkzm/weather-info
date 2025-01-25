import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const client = await clerkClient();
  const user = await currentUser();
  const searchParams = req.nextUrl.searchParams;
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  console.log("______________________________________________");
  console.log("city", city);
  console.log("lat", lat);
  console.log("lon", lon);
  console.log("++++++++++++++++++++++++++++++++++++++++++++++");

  try {
    await client.users.updateUserMetadata(user?.id as string, {
      privateMetadata: {
        city,
        lat,
        lon,
      },
    });
    // Response.redirect("/dashboard");
    return new Response("Location saved successfully", { status: 200 });
  } catch (error) {
    console.error("Failed to save location:", error);
    return new Response("Error fetching forecast data", { status: 500 });
  }
};
