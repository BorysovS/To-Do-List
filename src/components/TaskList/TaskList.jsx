import { TaskItem } from "components/TaskItem/TaskItem";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "redux/selectors";
import { Item, ListTask } from "./TaskList.styled";

export const TaskList = () => {

    const tasks = useSelector(selectVisibleTasks);

    console.log(tasks)
    return (
        <ListTask>
                {tasks.map(item => (<Item key={item.id}><TaskItem task={item}/></Item>))}
        </ListTask>
    )
};