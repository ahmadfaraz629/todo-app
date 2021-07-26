const list = [];
const getAllList = async () => {
  //let url = "http://localhost:3001/list/all";
  let url=process.env.REACT_APP_API_URL+"list/all";
  const setHeaders = { headers: { "Content-Type": "application/json" } };
  let myresult = await fetch(url, setHeaders);
  myresult = await myresult.json();
  if (myresult) {
    myresult.forEach((element) => {
      list.push(element);
    });
  }
};
getAllList();
export default { list };