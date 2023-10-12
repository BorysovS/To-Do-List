import { Button } from "components/Button/Button";
import { ModalWindow } from "components/Modal/Modal";
import { StatusBar } from "components/StatusBar/StatusBar";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import { useState } from "react";
import { Box, Wrapper } from "./AppBar.styled";

export const AppBar = () => {
    const [isModalOpen, setisModalOpen] = useState(false)

    const addType = "add";

    return (
        <header>
            <Wrapper>
            <Box>
                <h2>Task</h2>
                <TaskCounter />
            </Box>
            <Box>
                <h2>filter by status</h2>
                <StatusBar />
            </Box>
            </Wrapper>
            <div>
            <Button onClick={() => setisModalOpen(true)} >Add task</Button>
            </div>
            {isModalOpen && <ModalWindow type={addType} onClose={() => setisModalOpen(false)}/>}
        </header>
    );
};