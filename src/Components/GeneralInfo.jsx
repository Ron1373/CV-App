const GeneralInfo = ({ name, email, phone, setName, setEmail, setPhone }) => {
  return (
    <>
      <h3>General Info</h3>
      <label htmlFor="name">Name: </label>
      <input
        type="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Phone Number: </label>
      <input
        type="tel"
        id="phone"
        value={phone}
        pattern="[0-9]{10}"
        onChange={(e) => setPhone(e.target.value)}
      />
    </>
  );
};

export default GeneralInfo;
