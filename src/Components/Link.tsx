import React, { useState } from 'react';
import axios from 'axios';

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
    description: link.description,
    url: link.url,
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = (e: any) => {
    console.log(formValues);
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    console.log(e.target);
  };

  const cancelEdit = () => {
    setFormValues(initialFormValues);
    setEdit(false);
  };

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
            <button onClick={() => setEdit(!edit)}>Edit</button>
          ) : (
            <> </>
          )}
        </>
      ) : (
        <div className="editWrapper">
          <form onSubmit={handleSubmit}>
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
                id="description"
                value={formValues.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Save</button>
              <button onClick={() => cancelEdit()}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Link;
