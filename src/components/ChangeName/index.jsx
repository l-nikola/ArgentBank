import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../services/api";
import { setUser } from "../../store/userSlice";

export default function ChangeName() {
  const dispatch = useDispatch();
  const lastName = useSelector((state) => state.user.lastName);
  const firstName = useSelector((state) => state.user.firstName);
  const token = useSelector((state) => state.user.token);
  const [edit, setEdit] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [error, setError] = useState("");

  const handleSubmit = async (formSubmit) => {
    formSubmit.preventDefault();
    try {
      const updated = await updateUserProfile(token, {
        firstName: newFirstName,
        lastName: newLastName,
      });
      dispatch(
        setUser({
          firstName: updated.firstName,
          lastName: updated.lastName,
          token: token,
        })
      );
      setEdit(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="changeName">
      {edit === false && (
        <button onClick={() => setEdit(true)}>Edit Name</button>
      )}

      {edit && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={(e) => setNewFirstName(e.target.value)}
              placeholder={firstName}
            />
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={(e) => setNewLastName(e.target.value)}
              placeholder={lastName}
            />
          </div>
          {error && <div className="errorMessage">{error}</div>}
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
