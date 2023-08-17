"use client";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Notepad() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <button
        onClick={() =>
          setValue(
            "<h1>Heading</h1><p>awef</p><p>aw</p><p><strong><em><u>efd</u></em></strong></p><p>aw</p><p>edf</p><p>awedf</p>"
          )
        }
      >
        update
      </button>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
}
