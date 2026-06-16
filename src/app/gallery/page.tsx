import GalleryClient from "@/app/gallery/GalleryClient";

export const metadata = {
  title: "Gallery - Kailasa Woods",
  description: "Explore the beautiful gallery of Kailasa Woods estate.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-kw-offwhite text-kw-forest">
      <GalleryClient />
    </main>
  );
}
