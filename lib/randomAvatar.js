const getRandomGender = () => (Math.random() > 0.5 ? "men" : "women");
const getRandomId = () => Math.floor(Math.random() * 100);

const generateRandomAvatar = () => {
  const gender = getRandomGender();
  const id = getRandomId();
  return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
};

export default generateRandomAvatar;
