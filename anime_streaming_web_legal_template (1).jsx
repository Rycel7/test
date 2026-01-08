import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Utility: konversi berbagai format URL YouTube menjadi embed URL
function toYouTubeEmbed(url) {
  try {
    const parsed = new URL(url);

    // youtu.be/VIDEO_ID
    if (parsed.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }

    // youtube.com/watch?v=VIDEO_ID
    if (parsed.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
    }

    // youtube.com/embed/VIDEO_ID (sudah benar)
    if (parsed.pathname.startsWith("/embed/")) {
      return url;
    }

    return url; // fallback
  } catch {
    return url;
  }
}

const animeList = [
  {
    title: "[📺Semua Episode] Penggunaan Sihir Penyembuh yang Keliru",
    description: "Contoh anime legal menggunakan embed YouTube (placeholder)",
    videoUrl: "https://youtu.be/QDl8ICyzUxE?si=sD_8a-bLym5JUkhy",
  },
  {
    title: "Sample Anime Episode 2",
    description: "Ganti dengan sumber anime legal atau konten sendiri",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function AnimeStreamingApp() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Anime Streaming (Legal Template)</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {animeList.map((anime, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{anime.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{anime.description}</p>
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={toYouTubeEmbed(anime.videoUrl)}
                  title={anime.title}
                  allowFullScreen
                />
              </div>
              <Button className="w-full">Tambahkan ke Favorit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
