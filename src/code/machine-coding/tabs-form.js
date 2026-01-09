import React, { useState } from "react";

const TABS = [
  { id: "profile", name: "Profile", component: Profile },
  { id: "interests", name: "Interests", component: Interests },
  {
    id: "settings",
    name: "Settings",
    component: Settings,
  },
];
const INTERESTS = ["play", "sing", "dance"];

const App = () => {
  const [data, setData] = useState({
    profile: {
      name: "",
      age: "",
      email: "",
    },
    interests: {
      hobbies: [],
    },
    settings: {
      recommended: "",
    },
  });
  const [errors, setErrors] = useState({});
  const [tab, setTab] = useState("profile");
  const SelectedTab = TABS.find((t) => t.id === tab).component;

  const handleValidate = () => {
    if (tab === "profile") {
      const { name, age, email } = data[tab];
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const hasError =
        name.length < 5 || age < 18 || age > 100 || !email.match(regex);
      setErrors((p) => ({
        ...p,
        name: name.length < 5 ? "Name should be atleast of 5 characters" : "",
        age: age < 18 || age > 100 ? "Age should be btw 18 and 100" : "",
        email: email.match(regex) ? "" : "Enter valid email",
      }));
      if (!hasError) setTab("interests");
    }
    if (tab === "interests") {
      const { hobbies } = data[tab];
      const hasError = hobbies.length === 0;
      setErrors((prev) => ({
        ...prev,
        hobbies: hasError ? "Select atleast one." : "",
      }));
      if (!hasError) setTab("settings");
    }
    if (tab === "settings") {
      const { recommended } = data[tab];
      setErrors((p) => ({
        ...p,
        recommended: recommended === "" ? "Select one value" : "",
      }));

      const validProfile =
        data.profile.name && data.profile.age && data.profile.email;
      const validInterests = data.interests.hobbies;
      const validSettings = data.settings.recommended;

      const canSubmit = validProfile && validInterests && validSettings;
      if (canSubmit) console.log("submitted: ", data);
    }
  };

  return (
    <div>
      {TABS.map(({ name, id }) => (
        <button key={id} onClick={() => setTab(id)}>
          {name}
        </button>
      ))}
      <div style={{ marginTop: "10px" }}>
        <SelectedTab
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
        {Object.keys(errors).map((k) => (
          <p style={{ color: "red" }} key={k}>
            {errors[k]}
          </p>
        ))}

        {tab === "settings" ? (
          <button onClick={handleValidate}>Submit</button>
        ) : (
          <button onClick={handleValidate}>Next</button>
        )}
      </div>
    </div>
  );
};

function Profile({ data, setData }) {
  const profileData = data["profile"];

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [fieldName]: fieldValue,
      },
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: "4px",
      }}
    >
      <input
        name="name"
        onChange={handleChange}
        placeholder="Enter name"
        value={profileData.name}
      />
      <input
        name="age"
        onChange={handleChange}
        placeholder="Enter age"
        type="number"
        value={profileData.age}
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Enter email"
        type="email"
        value={profileData.email}
      />
    </div>
  );
}
function Interests({ data, setData }) {
  const interestsData = data["interests"];

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: {
        hobbies: [...prev.interests.hobbies, e.target.value],
      },
    }));
  };

  return (
    <div>
      {INTERESTS.map((int) => (
        <>
          <input
            checked={interestsData.hobbies.includes(int)}
            onChange={handleChange}
            id={int}
            type="checkbox"
            value={int}
          />
          <label htmlFor={int}>{int.toUpperCase()}</label>
        </>
      ))}
    </div>
  );
}
function Settings({ data, setData }) {
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      settings: {
        recommended: e.target.value === "true",
      },
    }));
  };

  return (
    <>
      <select value={data.settings.recommended} onChange={handleChange}>
        <option value="">Select a value</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </>
  );
}
