import React from 'react';

export default ({ data }) => (
  data.map(
    (item, key) => (
      item.field.map((fieldItem, fieldKey) => (
        <ul key={key + fieldKey}>
          <li>{fieldItem._text}</li>
        </ul>
      ))
    ),
  ));
