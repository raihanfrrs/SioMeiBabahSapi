export function buildWhatsAppLink(message: string): string {
  const phoneNumber = "6281333903187";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function generalOrderMessage(): string {
  return `Halo Sio Mei Babah Sapi, saya ingin bertanya mengenai Sio Mei Babah Sapi.`;
}

export function getProductOrderMessage(productType: "original" | "goreng" | "frozen"): string {
  if (productType === "original") {
    return `Halo Sio Mei Babah Sapi, saya ingin pesan Sio Mei Original.\nJumlah:\nNama:\nAlamat:\nCatatan:`;
  } else if (productType === "goreng") {
    return `Halo Sio Mei Babah Sapi, saya ingin pesan Sio Mei Goreng.\nJumlah:\nNama:\nAlamat:\nCatatan:`;
  } else if (productType === "frozen") {
    return `Halo Sio Mei Babah Sapi, saya ingin pesan Paket Sio Mei Frozen.\nJumlah:\nNama:\nAlamat:\nCatatan:`;
  }
  return generalOrderMessage();
}

export function b2bInquiryMessage(): string {
  return `Halo Sio Mei Babah Sapi, saya ingin diskusi kerja sama / supply B2B.\nNama usaha:\nKebutuhan:\nEstimasi jumlah:\nLokasi:\nCatatan:`;
}
