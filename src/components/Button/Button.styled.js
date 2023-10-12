import styled from 'styled-components';

export const Btn = styled.button`
display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#1976d2' : '#e2e5e8')}; /* Встановлення кольору залежно від selected */
  color: ${props => (props.selected ? '#fff' : 'inherit')}; /* Встановлення кольору тексту залежно від selected */

  &:hover {
    background-color: #1976d2;
  color: #fff;
  }

  &:active {
    background-color: #1565c0;
  color: #fff;

  }
`