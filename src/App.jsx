import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostDetail from "./components/PostDetail";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML, CSS",
      datetime: "July 01, 2021 11:17:36 AM",
      img: "https://unipython.com/wp-content/uploads/2018/03/aprenderhtml-y-css-min-641x320.jpg",
      body: "HTML es un lenguaje de marcado. Esto significa que nos permite definir la estructura y contenido de nuestra página web usando etiquetas. Toda parte de una página web se traduce en etiquetas HTML. Si quieres añadir un párrafo, utilizas la etiqueta p. Si quieres una imagen, utilizas la etiqueta img. Si quieres agregar un link al sitio de tu mejor amigo, utilizas la etiqueta a. Gracias a CSS nuestros sitios web pueden tener su propia personalidad. Usando código CSS podemos darle estilo y diseño a cada etiqueta HTML. Trabajando como frontend profesional, muy comúnmente te encontrarás acomodando la posición, color, animaciones y demás propiedades de cada etiqueta de tu página web.",
    },
    {
      id: 2,
      title: "JavaScript",
      datetime: "July 07, 2021 06:05:45 PM",
      img: "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
      body: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.",
    },
    {
      id: 3,
      title: "React Js",
      datetime: "October 20, 2021 19:10:20 PM",
      img: "https://www.pedrodelanube.com/wp-content/uploads/2021/10/the-benefits-of-reactjs-main-min.jpg",
      body: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [postCreated, setPostCreated] = useState(false);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
      img: postImg,
    };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    setPostImg("");
    setPostCreated(true);
  };

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    console.log("delete");
  };

  return (
    <BrowserRouter>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route
          path="/newpost"
          element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              postImg={postImg}
              setPostImg={setPostImg}
              handleSubmit={handleSubmit}
              postCreated={postCreated}
              setPostCreated={setPostCreated}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostDetail posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
