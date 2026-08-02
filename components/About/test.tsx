"use client";

export default function TestDownload() {
  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/Meet-Gelothra.pdf";
    a.download = "Meet-Gelothra.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return <button onClick={downloadResume}>Download</button>;
}