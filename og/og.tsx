import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";

const colorsArr: string[] = [
  "#5F0B0D", "#5E2136", "#4F325C", "#214187", "#253764",
  "#1F2942", "#0F151F", "#132521", "#16321F", "#183319",
  "#1B383D", "#1E3C62", "#214186", "#362F5E", "#4A1D35"
];

function getRandomColor(): string {
  const randomIndex = Math.floor(Math.random() * colorsArr.length);
  return colorsArr[randomIndex];
}

const selectedColor: string = getRandomColor();

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const word = url.searchParams.get("word");

  return new ImageResponse(
    <div
      style={{
        fontSize: 60,
        color: "white",
        backgroundColor: selectedColor,
        width: "100%",
        height: "100%",
        paddingTop: 50,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img
        alt="avatar"
        width="256"
        src={"https://wordsmithe.vercel.app/images/favicon.svg"}
      />
      <h1>
        {word}
      </h1>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}

serve(handler);

export const config: Config = {
  path: "/image",
};
