import { ModalWindow } from "components/Modal/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "redux/taskSlice";

import {BtnDel, BrnEdit, Container, BtnWrap, SpanWrap, Span, Title, TitleWrap} from "./TaskItem.styled"

import { MdMode } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdCheck } from "react-icons/md";


export const TaskItem = ({task}) => {
    const { title, message, isCompleted, id } = task;
    const [isOpen, setIsOpen] = useState(false)
    const editType = "edit";
    const dispatch = useDispatch();

    const editTask = (updatedTask) => {
        console.log(updatedTask)
        dispatch(updateTask({id, updatedTask}));
    };

    const deleteItem = () => {
        dispatch(deleteTask(id));
    };


    return (
        <Container>
            <TitleWrap>
            <Title>{title}</Title>
            </TitleWrap>
            <div>
            <p>{message}</p>
            </div>
            <BtnWrap>
            <p>{isCompleted ? <SpanWrap>Complited <MdCheck size={18} color="green"/></SpanWrap> : <Span>Processed...</Span>}</p>
            <BrnEdit type="button" onClick={() => setIsOpen(true)}><MdMode size={24}/></BrnEdit>
            {isOpen && < ModalWindow type={editType} data={task} onClose={() => setIsOpen(false)} saveData={editTask}/>}
            <BtnDel type="button" onClick={deleteItem}><MdClose size={24} color="red"/></BtnDel>
            </BtnWrap>
        </Container>
    )
};