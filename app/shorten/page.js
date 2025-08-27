"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setGenerated(`http://localhost:3000/${shorturl}`); // Change to process.env.NEXT_PUBLIC_HOST in prod
          setUrl("");
          setShorturl("");
          alert(result.message);
        } else {
          alert(result.message || "Failed to generate URL");
        }
      })
      .catch((error) => console.error(error));
  };

  const copyToClipboard = () => {
    if (generated) {
      navigator.clipboard.writeText(generated).then(() => {
        setCopyMessage("Copied!");
        setTimeout(() => setCopyMessage(""), 2000);
      });
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-4xl flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 bg-white rounded-xl"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className="px-4 py-2 focus:outline-purple-600 bg-white rounded-xl"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShorturl(e.target.value)}
        />

        <button
          type="button"
          onClick={generate}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-3 focus:ring-purple-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="mt-4 flex flex-col gap-2 p-4 rounded-xl shadow-md">
          <span className="font-semibold">Your Link:</span>
          <code
            className="cursor-pointer text-blue-600 underline"
            onClick={() => navigator.clipboard.writeText(generated)}
          >
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
          
        </div>
      )}
    </div>
  );
};

export default Shorten;
