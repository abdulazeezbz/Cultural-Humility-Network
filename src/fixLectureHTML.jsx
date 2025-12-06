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

  // 2. Fix broken <img src="<a href=...>">
  decoded = decoded.replace(
    /<img[^>]+src="[^"]*<a[^>]*href="([^"]+)"[^>]*>[^<]*<\/a>[^"]*"[^>]*>/gi,
    '<img src="$1" />'
  );

  // 3. ✅ Convert YouTube links → iframe
  decoded = convertYoutubeLinksToIframe(decoded);

  // 4. Sanitize (allow iframe)
  return DOMPurify.sanitize(decoded, {
    ADD_TAGS: ["iframe", "video", "source"],
    ADD_ATTR: [
      "src",
      "width",
      "height",
      "frameborder",
      "allow",
      "allowfullscreen",
      "controls",
      "type",
    ],
  });
}
