const list = [];

const hello = async () => {
  let url = "http://localhost:3001/list/all";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let myresult = await fetch(url, setHeaders);
  myresult = await myresult.json();
  //console.log(myresult);
  if (myresult) {
    myresult.forEach((element) => {
      list.push(element);
      //console.log(element);
    });
  }
};

hello();

export default { list };
