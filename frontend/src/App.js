import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Add from "./components/Add";
import List from "./components/Admin/list";
import NotFound from "./components/NotFound";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loader from "./components/Loader";
import Error from "./components/Error";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/drinks/:categoryName/:categoryId"
              element={<Drinks />}
            />
            <Route exact path="/drinks" element={<List />} />
            <Route exact path="/add" element={<Add />} />
            <Route exact path="/update/:id" element={<Update />} />
            <Route exact path="/delete/:id" element={<Delete />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/loader" element={<Loader />} />
            <Route exact path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
