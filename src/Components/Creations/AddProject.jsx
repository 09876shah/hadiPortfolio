import React, { useContext, useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import AuthContext from "../Auth/Auth";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const AddProject = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    imgurl: "",
    info: "",
    gamelink: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(items);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const projectRef = doc(db, "projects", editId);
      await updateDoc(projectRef, form);
      setProjects((prev) =>
        prev.map((proj) =>
          proj.id === editId ? { id: editId, ...form } : proj
        )
      );
    } else {
      const docRef = await addDoc(collection(db, "projects"), form);
      setProjects([...projects, { id: docRef.id, ...form }]);
    }
    setForm({ title: "", imgurl: "", info: "", gamelink: "" });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      imgurl: project.imgurl,
      info: project.info,
      gamelink: project.gamelink,
    });
    setEditId(project.id);
  };

  return (
    <div className="fixed top-0 left-0  w-full h-[100vh] flex items-center justify-center bg-black  bg-opacity-30 z-[99999]">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl h-[100vh] overflow-y-auto shadow-lg">
        <button
          className="text-white absolute top-4 right-10 text-3xl z-[999999] hover:text-red-500"
          onClick={() => setAuthenticated(false)}
        >
          <IoCloseCircleOutline />
        </button>

        <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
          {editId ? "Update Project" : "Add New Project"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            placeholder="Project Title"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="imgurl"
            value={form.imgurl}
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="info"
            value={form.info}
            placeholder="Project Info"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <input
            type="text"
            name="gamelink"
            value={form.gamelink}
            placeholder="Game Link"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            {editId ? "Update Project" : "Add Project"}
          </button>
        </form>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">
          Project List
        </h3>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 p-4 rounded-lg flex items-center justify-between shadow-sm"
            >
              <div>
                <h4 className="font-semibold text-gray-800">{project.title}</h4>
                <p className="text-gray-600">{project.info}</p>
                <a
                  href={project.gamelink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Game
                </a>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProject;
