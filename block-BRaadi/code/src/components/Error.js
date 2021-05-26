function Error(props) {
  console.log(props);
  return (
    <>
      <p>Somthing went wrong relode page</p>
      <p>{props.error.message}</p>
    </>
  );
}
export default Error;
