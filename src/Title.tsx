import React from 'react';

interface TitleProps {
  text: string;
  color?: string;
}

const Title: React.FC<TitleProps> = props => {
  return <h2 style={{ color: props.color || 'black' }}>{props.text} </h2>;
};
export default Title;
