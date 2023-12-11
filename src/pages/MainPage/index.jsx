import Calendar from '../../components/Calendar';
import styled from '@emotion/styled';
import { CalendarContextProvider } from '../../context/CalendarContext';
import TodoList from '../../components/TodoList';

const MainContainer = styled.div``;
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
  gap: 1rem;
  overflow: auto;
  margin: 1rem 0;
`;

const MainPage = () => {
  return (
    <CalendarContextProvider>
      <MainContainer>
        <Calendar />
        <TodoContainer>
          <TodoList />
        </TodoContainer>
      </MainContainer>
    </CalendarContextProvider>
  );
};

export default MainPage;
