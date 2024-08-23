const EducationInfo = ({
  university,
  setUniversity,
  date,
  setDate,
  degree,
  setDegree,
  education,
  setEducation,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setEducation([...education, { university, degree, date }]);
    console.log(education);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Education</h3>
      <label htmlFor="university">University: </label>
      <input
        type="name"
        id="university"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
      />

      <label htmlFor="name">Degree: </label>
      <input
        type="name"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />

      <label htmlFor="date">Graduation Date: </label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Education</button>
    </form>
  );
};
export default EducationInfo;
