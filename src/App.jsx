import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Index } from "./pages/index";
import { CreateNews } from "./pages/createNew";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

import { ThemeProviter } from "./providers/ThemeProviter.jsx";
import { NewProviter } from "./providers/NewProviter.jsx";

import { ViewNews } from "./pages/viewNews.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { EditNews } from "./pages/editNews.jsx";
import { FollowMouse } from "./components/followerMouse.jsx";

function App() {
  return (
    <NewProviter>
      <ThemeProviter>
        <main className="bg-primary-color dark:bg-second-color -z-10 w-full min-h-screen flex flex-col justify-center py-5 minicel:px-10 md:px-16 lg:px-28 xl:px-48 2xl:px-80 gap-2">
          <Nav />

          <Routes>
            <Route
              path="/"
              element={<Index></Index>}
            />
            <Route
              path="/createNew"
              element={<CreateNews></CreateNews>}
            />
            <Route
              path="/news/:id"
              element={<ViewNews></ViewNews>}
            />
            <Route
              path="/editNews/:id"
              element={<EditNews></EditNews>}
            >
            </Route>
            <Route
              path="*"
              element={<NotFound></NotFound>}
            >
            </Route>
          </Routes>

          <Footer />
          <FollowMouse></FollowMouse>
        </main>
      </ThemeProviter>
    </NewProviter>
  );
}

export default App;
