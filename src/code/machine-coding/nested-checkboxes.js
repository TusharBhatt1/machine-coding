import React, { useState } from "react";
// nested checkboxes
const DATA = [
  {
    id: 1,
    name: "hobbies",
    checked: false,
    children: [
      {
        id: 2,
        name: "dancing",
        checked: false,

        children: [
          {
            id: 3,
            name: "salsa",
            checked: false,
          },
          {
            id: 4,
            name: "hiphop",
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "DSA",
    checked: false,

    children: [
      {
        id: 6,
        name: "two-pointers",
        checked: false,
      },
      {
        id: 7,
        name: "trees",
        checked: false,
      },
    ],
  },
];
const App = () => {
  const [data, setData] = useState(DATA);

  function checkDescendants(tree) {
    const resultTree = tree.map((t) => {
      if (!t.children || t.children.length == 0) {
        return {
          ...t,
        };
      }
      const updatedChildren = checkDescendants(t.children);
      const checkIfAllAreChecked = updatedChildren.every(
        (c) => c.checked === true
      );
      return {
        ...t,
        children: updatedChildren,
        checked: checkIfAllAreChecked,
      };
    });

    return resultTree;
  }

  function checkUnCheckAll(tree, value) {
    return tree.map((t) => ({
      ...t,
      checked: value,
      children: t.children ? checkUnCheckAll(t.children, value) : [],
    }));
  }

  const handleOnChange = (id) => {
    function checkUnCheck(tree) {
      const updatedTree = tree.map((t) => {
        if (t.id == id) {
          return {
            ...t,
            checked: !t.checked,
            children: t.children ? checkUnCheckAll(t.children, !t.checked) : [],
          };
        }
        if (t.children) {
          return {
            ...t,
            children: checkUnCheck(t.children),
          };
        }

        return t;
      });

      return updatedTree;
    }

    const updatedCheckboxes = checkUnCheck(data);
    const finalUpdatedData = checkDescendants(updatedCheckboxes);
    setData(finalUpdatedData);
  };
  return (
    <div>
      <RenderCheckboxes data={data} handleOnChange={handleOnChange} />
    </div>
  );
};
function RenderCheckboxes({ data, handleOnChange }) {
  return (
    <>
      {data.map(({ id, name, children, checked }) => (
        <div>
          <input
            id={name}
            onChange={() => handleOnChange(id)}
            type="checkbox"
            value={name}
            checked={checked}
          />
          <label htmlFor={name}>{name}</label>
          {children && (
            <div style={{ paddingLeft: "20px" }}>
              <RenderCheckboxes
                data={children}
                handleOnChange={handleOnChange}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default App;
