"use client";

import useSWR from "swr";

export default function Home() {
  const { data: text } = useSWR("/api/hello", (url) =>
    fetch(url).then((res) => res.text())
  );
  const { data: json } = useSWR("/api/hello", (url) =>
    fetch(url, { method: "POST" }).then((res) => res.json())
  );

  return (
    <main>
      <p>text: {text}</p>
      <p>json: {JSON.stringify(json)}</p>
    </main>
  );
}
