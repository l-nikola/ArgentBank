import { useState } from "react";
import { useSelector } from "react-redux";

export default function ChangeName() {
  const lastName = useSelector((state) => state.user.lastName);
  const firstName = useSelector((state) => state.user.firstName);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <section className="changeName">
      {edit === false && (
        <button onClick={() => setEdit(true)}>Edit Name</button>
      )}

      {edit && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">{firstName}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder={firstName}
            />
            <label htmlFor="lasttName">{lastName}</label>
            <input
              type="text"
              id="lasttName"
              name="lasttName"
              placeholder={lastName}
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </div>
        </form>
      )}
    </section>
  );
}
