import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/dashboard/",
          "/login/",
          "/private/",
          "/server-sitemap.xml",
        ],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-Video",
          "GoogleOther",
          "GoogleOther-Image",
          "GoogleOther-Video",
          "Google-Extended",
          "Google-CloudVertexBot",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://siomeibabahsapi.my.id/sitemap.xml",
  };
}
