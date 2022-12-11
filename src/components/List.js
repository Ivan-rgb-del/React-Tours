import React, { useEffect, useState } from 'react';

import classes from './Card.module.css';

import Card from './Card';

const url = 'https://course-api.com/react-tours-project';

const List = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error("Something went wrong!");
        }
        return resp.json();
      })
      .then(respData => setData(respData))
      .catch(error => {
        console.log(error.message);
      });
    };

    useEffect(() => {
      fetchData();
  }, []);

  const deleteHandler = (id) => {
    const newData = data.filter(prevId => prevId.id !== id);
    setData(newData);
  };

  return (
    <>
      <h1 className={classes.mainTitle}>Our Tours</h1>
      <p className={classes.line}></p>

      {data.length > 0 &&
        <Card
          allData={data}
          onDeleteHandler={deleteHandler}
        />
      }

      {data.length === 0 &&
        <button onClick={fetchData}>Refresh</button>
      }
    </>
  );
};

export default List;