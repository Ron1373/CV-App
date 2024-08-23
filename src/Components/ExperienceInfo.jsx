const ExperienceInfo = ({
  company,
  setCompany,
  position,
  setPosition,
  responsibilities,
  setResponsibilities,
  from,
  setFrom,
  to,
  setTo,
  experience,
  setExperience,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setExperience([
      ...experience,
      { company, position, responsibilities, from, to },
    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Experience</h3>
      <label htmlFor="company">Company: </label>
      <input
        type="name"
        id="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <label htmlFor="position">Position: </label>
      <input
        type="name"
        id="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <label htmlFor="responsibilities">Responsibilities: </label>
      <input
        type="name"
        id="responsibilities"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
      />

      <label htmlFor="from">Started at: </label>
      <input
        type="date"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <label htmlFor="to">Left at: </label>
      <input
        type="date"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <button type="submit">Add Experience</button>
    </form>
  );
};
export default ExperienceInfo;
