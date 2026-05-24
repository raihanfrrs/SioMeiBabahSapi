export const WHATSAPP_NUMBER = "6281333903187";

export interface ProductOrderInfo {
  name: string;
  price: string;
  qty: string;
}

export function createWhatsAppLink(product: ProductOrderInfo) {
  const message = `Halo Babah Sapi, saya ingin pesan Sio Mei.

Produk: ${product.name}
Harga: ${product.price}
Isi: ${product.qty}

Jumlah pesanan: 1 porsi/paket
Nama:
Alamat pengiriman:
Catatan pesanan:

Mohon dibantu konfirmasi total harga dan ongkirnya. Terima kasih.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppLink() {
  const message = `Halo Babah Sapi, saya ingin pesan Sio Mei.
Boleh dibantu info menu, harga, dan cara pemesanannya?

Nama:
Alamat pengiriman:
Catatan:

Terisa kasih.`;

  // Wait, let's look at the exact spelling requested by the user: "Terima kasih."
  // The user wrote:
  // Terima kasih.
  // Let's double check spelling:
  const exactMessage = `Halo Babah Sapi, saya ingin pesan Sio Mei.
Boleh dibantu info menu, harga, dan cara pemesanannya?

Nama:
Alamat pengiriman:
Catatan:

Terima kasih.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(exactMessage)}`;
}
