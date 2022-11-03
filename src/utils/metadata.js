export const getAddress = () => {
  const location = {
    address:
      "Av. das Letras, 1019 - Lot. Villa Branca, Jacareí - SP, 12301-330",
    lat: -23.26519,
    lng: -45.94284,
  };
  const maps = `https://maps.google.com?q=${location.lat},${location.lng}`;
  return { location, maps };
};

export const getSocialMedia = () => {
  const phoneNumber = "+5511976270471";
  const whatsapp = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=Olá&app_absent=0`;
  const instagram =
    "https://www.instagram.com/vanessapires_nailsdesigner/?igshid=YmMyMTA2M2Y%3D";
  return { whatsapp, instagram };
};

export const sendEmail = (email) => {
  const subject = "Mais informações sobre serviços disponiveis";
  const body = "Olá";
  const mail = `mailto:caickpassarella@gmail.com?subject=${subject}&body=${body}`;
  return mail;
};
