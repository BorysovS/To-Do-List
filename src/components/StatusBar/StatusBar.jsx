import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/Button/Button";
import { statusFilters } from "redux/constans";
import { setStatusFilter } from "redux/filterSlice";
import { Container } from "./StatusBar.styled";
import { selectStatusFilter } from "redux/selectors";


export const StatusBar = () => {
    const dispatch = useDispatch();

    const filter = useSelector(selectStatusFilter);


    const handleFilterChange = filterStatus => dispatch(setStatusFilter(filterStatus));

    return (
        <Container>
            <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
            <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>In progress</Button>
            <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>Complited</Button>
        </Container>
    );
};