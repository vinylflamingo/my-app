import { useState } from "react";

const Form = ({ addToList }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isCompleted: false,
    isDeleted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList(formData);
    setFormData({ title: "", description: "", isCompleted: false, isDeleted: false });
  };

  return (
    <div className="w-80">
      <form onSubmit={handleSubmit} className="flex flex-col bg-gray-400">
        <input
          className="m-4"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          className="m-4"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button className="m-4 bg-white p-3" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
