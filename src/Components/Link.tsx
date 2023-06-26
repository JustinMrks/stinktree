import axios from 'axios';
import React, { useState } from 'react';
// import axios from 'axios';

type LinkState = {
  link: {
    id: number;
    name: string;
    description: string;
    url: string;
    userId: number;
  };
  editing: boolean;
};

const Link = ({ link, editing }: LinkState) => {
  const [edit, setEdit] = useState(false);

  const initialFormValues = {
    name: link.name,
    desc: link.description,
    url: link.url,
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    return axios
      .put(`http://localhost:3000/links/lid/${link.id}`, formValues)
      .then((res) => {
        refresh();
      })
      .catch((err) => console.log(err.message));
  };

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleDelete = () => {
    return axios
      .delete(`http://localhost:3000/links/lid/${link.id}`)
      .then((res) => {
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelEdit = () => {
    setFormValues(initialFormValues);
    setEdit(false);
  };

  const refresh = () => window.location.reload();
  // hacky workaround since we arent using better state management

  return (
    <>
      {!edit ? (
        <>
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="linkWrapper"
          >
            <h2>{link.name}</h2>
            <h3>{link.description}</h3>
          </a>
          {editing ? (
            <button className="editButton" onClick={() => setEdit(!edit)}>
              Edit
            </button>
          ) : (
            <> </>
          )}
        </>
      ) : (
        <div className="editWrapper">
          <form onSubmit={handleUpdate}>
            <div>
              <label>Url</label>
              <input
                type="text"
                id="url"
                value={formValues.url}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Link Name</label>
              <input
                type="text"
                id="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                id="desc"
                value={formValues.desc}
                onChange={handleChange}
              />
            </div>
            <div className="buttons">
              <button className="lilButton save" type="submit">
                Save
              </button>
              <button
                className="lilButton"
                onClick={() => cancelEdit()}
                type="button"
              >
                Cancel
              </button>
              <button
                className="lilButton delete"
                onClick={handleDelete}
                type="button"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Link;
