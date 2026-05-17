# Tempat Penyimpanan Video Sinematik Hero

Letakkan 4 file video yang sudah dianimasikan menggunakan **Whisk AI** ke dalam folder ini.

## Nama File yang Dibutuhkan:
- `hero-1.mp4` (Proses Pengukusan Hangat)
- `hero-2.mp4` (Taburan Garam Daging Sapi Premium)
- `hero-3.mp4` (Guyuran Saus Kacang Berkilau)
- `hero-4.mp4` (Plating Mewah Kelas Michelin)

Setelah file-file tersebut diletakkan di folder ini, ubah baris kode di `frontend/components/Hero.tsx` menjadi:
```typescript
const activeVideos = localVideos;
```
Dan video sinematik kustom Anda akan langsung berjalan live di website!
