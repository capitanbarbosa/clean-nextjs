export default function Client() {
  const handleClick = async () => {
    fetch("https://186.155.197.158/notify", {
      // mode: "no-cors",
      headers: {
        Origin: "https://wizlabs.co",
      },
    })
      .then((response) => {
        // Handle response from server
        console.log(response);
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Send request to server</button>
    </div>
  );
}
