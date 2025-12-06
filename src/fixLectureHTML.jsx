import DOMPurify from "dompurify";
import he from "he";

function convertYoutubeLinksToIframe(html) {
  return html.replace(
    /<a[^>]*href="https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^"&]+)"[^>]*>.*?<\/a>/gi,
    (_, __, ___, videoId) => `
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `
  );
}

export function fixLectureHTML(html) {
  if (!html) return "";



  // 1. Decode escaped HTML
  let decoded = he.decode(html);

    decoded = decoded.replace(
  /<table([\s\S]*?)<\/table>/gi,
  (match) => `<div class="table-wrapper">${match}</div>`
);





  // 2. Fix broken <img src="<a href=...>">
  decoded = decoded.replace(
    /<img[^>]+src="[^"]*<a[^>]*href="([^"]+)"[^>]*>[^<]*<\/a>[^"]*"[^>]*>/gi,
    '<img src="$1" />'
  );

  // 3. Convert YouTube links → iframe
  decoded = convertYoutubeLinksToIframe(decoded);

  // 4. Wrap content between //CardStart and //CardEnd in a div.card
  decoded = decoded.replace(
    /\/\/CardStart([\s\S]*?)\/\/CardEnd/gi,
    (_, content) => `<div class="card">${content.trim()}</div>`
  );

  // 5. Sanitize (allow iframe, video, source)
  return DOMPurify.sanitize(decoded, {
    ADD_TAGS: ["iframe", "video", "source", "div"],
    ADD_ATTR: [
      "src",
      "width",
      "height",
      "frameborder",
      "allow",
      "allowfullscreen",
      "controls",
      "type",
      "class",
    ],
  });
}
