import React from 'react'

export default function Child(props) {
  console.log(props)
  return (
    <p>
       my name is this {props.na}
    </p>
  );
}

