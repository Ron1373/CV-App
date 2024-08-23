const CV = ({ name, email, phone, education, experience }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p className="contact">{phone}</p>
      <hr />
      <h3>EDUCATION</h3>

      <ul>
        {education.map((element) => (
          <li>
            <div class="list-el">
              <span>{element.degree}</span> <span>{element.date}</span>
            </div>
            <br />
            <em> {element.university}</em>
          </li>
        ))}
      </ul>
      <hr />
      <h3>EXPERIENCE</h3>
      <ul>
        {experience.map((element) => (
          <li>
            <div className="list-el">
              <span>{element.position}</span>{" "}
              <span>
                {element.from} - {element.to}
              </span>
            </div>

            <div className="company-name">{element.company}</div>
            {element.responsibilities}
          </li>
        ))}
      </ul>
    </>
  );
};
export default CV;
