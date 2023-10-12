import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  return (
   <Layout>
    <AppBar />
    <TaskList />
   </Layout>
  );
};
