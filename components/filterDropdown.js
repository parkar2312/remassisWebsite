import { useState } from "react";
import { Filter } from "react-feather";
const data = [
  { id: 0, label: "Enabled" },
  { id: 1, label: "Disabled" },
];
const data2 = [
  { id2: 0, label: "AB+" },
  { id2: 0, label: "O-" },
  { id2: 0, label: "B-" },
  { id2: 0, label: "A+" },
  { id2: 0, label: "B+" },
];
const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [items2, setItem2] = useState(data2);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div>
      <div className="dropdown4">
        <div className="dropdown-header4 p-1" onClick={toggleDropdown}>
          <p class="mb-0">
            <Filter size={12} /> Filter{" "}
          </p>
          {/* {selectedItem
            ? items.find((item) => item.id == selectedItem).label
            : "Select your destination"} */}
          <i className={`fa fa-chevron-right icon4 ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body4 ${isOpen && "open"}`}>
          <p class="lab-title">By Account status</p>
          {items.map((item) => (
            <div
              className="dropdown-item4"
              onClick={(e) => handleItemClick(e.target.id2)}
              id2={item.id2}
            >
              <span>
                <input type="checkbox" name="acc" checked="" />{" "}
              </span>
              {item.label}
            </div>
          ))}
          <p class="lab-title">By Blood Type</p>
          {items2.map((item) => (
            <div
              className="dropdown-item4"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span>
                <input type="checkbox" name="acc" checked="" />{" "}
              </span>
              {item.label}
            </div>
          ))}
          <button type="submit" class="btn w-100 btn-primary">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
