export const WHATSAPP_NUMBER = "6281333903187";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generalOrderMessage(): string {
  return `Halo Babah Sapi, saya ingin bertanya tentang pemesanan Sio Mei.

Nama:
Kebutuhan pesanan:
Alamat/lokasi:
Catatan:

Terima kasih.`;
}

export function b2bInquiryMessage(): string {
  return `Halo Babah Sapi, saya ingin berdiskusi mengenai kerja sama B2B untuk produk Sio Mei Frozen.

Nama:
Perusahaan/Outlet:
Kebutuhan:
Estimasi jumlah:
Lokasi:
Catatan:

Terima kasih.`;
}

export function productOrderMessage(productName: string, price: string): string {
  return `Halo Babah Sapi, saya ingin pesan ${productName}.

Detail pesanan:
- Produk: ${productName}
- Harga: ${price}
- Jumlah: ... pack

Data pemesan:
- Nama:
- Alamat pengiriman:
- Catatan pesanan:

Mohon info total pembayaran dan ongkirnya. Terima kasih.`;
}
