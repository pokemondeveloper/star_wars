import { Route, Routes } from "react-router-dom";
import { Home, Person } from "./pages";
import { Layout } from "./layout";

/**
 * Main application component that sets up the routing structure.
 *
 * It renders the `Layout` component which contains the main content
 * and defines the application routes using `Routes` and `Route`.
 * The available routes are:
 * - `/`: Renders the `Home` component.
 * - `/person/:id`: Renders the `Person` component, where `id` is a dynamic parameter.
 *
 * @returns A JSX element representing the application.
 */
export const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/person/:id" element={<Person />} />
    </Routes>
  </Layout>
);
