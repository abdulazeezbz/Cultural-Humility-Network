export function youtubeUrlToIframe(url) {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/i
  );

  if (!match) return "";

  return `
    <iframe
      width="100%"
      height="400"
      src="https://www.youtube.com/embed/${match[1]}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}
